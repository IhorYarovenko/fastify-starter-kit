import fastifySwagger from 'fastify-swagger';
import swagger from '../../swagger.js';

const initSwagger = async (fastify) => fastify.register(fastifySwagger, swagger);

export default initSwagger;
