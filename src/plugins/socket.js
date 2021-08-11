import { RedisClient } from 'redis';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { REDIS } from '../../config/env.js';
import webSocket from '../utils/socket.js';

const initSockets = (server) => {
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

export default initSockets;
