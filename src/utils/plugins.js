const registerSchema = (fastify, schemas) => {
  schemas.forEach((schema) => fastify.addSchema(schema));
};

export default registerSchema;
