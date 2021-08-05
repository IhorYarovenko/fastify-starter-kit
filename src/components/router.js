import authRouter from './Auth/router.js';

export default async function router(fastify) {
  fastify.register(authRouter, { prefix: '/auth' });
}
