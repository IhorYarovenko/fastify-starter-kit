import initAjvValidator from '../plugins/ajv.js';
import initSwagger from '../plugins/swagger.js';
import initMongodb from '../plugins/mongodb.js';
import initSockets from '../plugins/socket.js';

export const addSchema = (fastify, schemas) => {
  schemas.forEach((schema) => fastify.addSchema(schema));
};

export const registerPlugins = async (fastify) => {
  await initAjvValidator(fastify);
  await initSwagger(fastify);
  await initMongodb(fastify);
  await initSockets(fastify.server);
};
