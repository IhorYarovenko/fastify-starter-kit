import MongodbRepository from '../../utils/mongodb.js';
import collections from '../../constants/collections.js';
import ajv from '../../utils/ajv.js';
import UserSchema from '../../schemas/User.schema.js';

class UserRepository extends MongodbRepository {
  constructor() {
    super(collections.USER);
  }

  async create(user) {
    const validate = ajv(UserSchema, user);
    if (!validate.valid) {
      throw validate.errors;
    }
    return validate.valid;
  }
}

const User = new UserRepository();

export default User;
