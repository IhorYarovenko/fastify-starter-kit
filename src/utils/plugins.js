import Ajv from 'ajv';
import fastifyEnv from 'fastify-env';
import { envSchema } from './options.js';

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

export const initEnv = (fastify) => fastify.register(fastifyEnv, {
  confKey: 'config',
  schema: envSchema,
  dotenv: {
    path: '.env',
    debugger: true,
  },
});
