import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { RedisClient } from 'redis';
import webSocket from './socket.js';
import { REDIS } from '../../config/env.js';
import initAjvValidator from '../plugins/ajv.js';
import initSwagger from '../plugins/swagger.js';

export const registerSchema = (fastify, schemas) => {
  schemas.forEach((schema) => fastify.addSchema(schema));
};

export const registerPlugins = async (fastify) => {
  await initAjvValidator(fastify);
  await initSwagger(fastify);
};

export const initSockets = (server) => {
  const io = new Server(server, {
    cors: {
      methods: ['GET', 'POST'],
      credentials: false,
    },
    transports: [
      'websocket',
    ],
  });
  const pubClient = new RedisClient({ host: REDIS.HOST, port: REDIS.PORT });
  const subClient = pubClient.duplicate();

  io.adapter(createAdapter(pubClient, subClient));
  io.on('connection', (req) => webSocket(req, io));
};
