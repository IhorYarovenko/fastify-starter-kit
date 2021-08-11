import DefaultSchema from './default.schema.js';

class UserSchema extends DefaultSchema {
  constructor() {
    super();
    this.$id = 'userSchema';
    this.properties = {
      firstName: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
    };
    this.required = ['firstName', 'email', 'password'];
  }
}

export default UserSchema;
