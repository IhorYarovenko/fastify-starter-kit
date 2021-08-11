import Ajv from 'ajv';

const parseErrorsRespos = (errors) => errors.map((e) => ({
  params: e.params,
  message: e.message,
}));

/**
 *
 * @param schema
 * @param data
 * @returns {{valid: boolean, errors: any[]}}
 */
const validate = (schema, data) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  const valid = validate(data);
  return {
    valid,
    errors: !valid ? parseErrorsRespos(validate.errors) : [],
  };
};

export default validate;
