import * as loginSchema from '../../schemas/auth/Login.schema.js';
import * as registerSchema from '../../schemas/auth/Register.schema.js';
import { addSchema } from '../../utils/plugins.js';
import { login, register } from './handler.js';

export default async function userController(fastify) {
  await addSchema(fastify, [loginSchema.body, registerSchema.body]);

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
