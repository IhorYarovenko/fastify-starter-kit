import loginBodySchema from './validators/login.validator.js';
import registerBodySchema from './validators/register.validator.js';
import { login, register } from './handler.js';
import { registerSchema } from '../../utils/plugins.js';

export default async function userController(fastify) {
  await registerSchema(fastify, [loginBodySchema, registerBodySchema]);

  fastify.route({
    method: 'POST',
    url: '/login',
    schema: {
      body: { $ref: 'loginBodySchema#' },
    },
    handler: login,
  });

  fastify.route({
    method: 'POST',
    url: '/register',
    schema: {
      body: { $ref: 'registerBodySchema#' },
    },
    handler: register,
  });
}
