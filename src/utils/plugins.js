import Ajv from 'ajv';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { RedisClient } from 'redis';
import webSocket from './socket.js';
import { REDIS } from '../../config/env.js';

export const registerSchema = (fastify, schemas) => {
  schemas.forEach((schema) => fastify.addSchema(schema));
};

export const initAjvValidator = (fastify) => {
  const ajv = new Ajv({
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    nullable: true,
  });

  return fastify.setValidatorCompiler(({
    schema,
  }) => ajv.compile(schema));
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
