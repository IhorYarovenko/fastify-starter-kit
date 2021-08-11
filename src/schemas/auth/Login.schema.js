import UserSchema from '../User.schema.js';

class LoginBody extends UserSchema {
  constructor() {
    super();
    this.$id = 'loginBodySchema';
  }
}

export const body = new LoginBody()
  .schema({
    properties: ['email', 'password'],
    required: ['email'],
  });
