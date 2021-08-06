import Ajv from 'ajv';

const initAjvValidator = async (fastify) => {
  const ajv = new Ajv({
    removeAdditional: true,
    useDefaults: true,
    coerceTypes: true,
    nullable: true,
  });

  return fastify.setValidatorCompiler(({ schema }) => ajv.compile(schema));
};

export default initAjvValidator;
