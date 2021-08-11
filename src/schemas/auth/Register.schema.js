export const body = {
  $id: 'registerBodySchema',
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    firstName: { type: 'string' },
    password: { type: 'string', minLength: 6 },
  },
  required: ['email', 'password', 'firstName'],
  additionalProperties: false,
};
