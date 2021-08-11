import User from '../User/user.repository.js';

export const login = async (req, reply) => {
  User.find({})
    .then((result) => {
      reply.send({ result });
    })
    .catch((e) => {
      reply.send({ message: e });
    });
};

export const register = (req, reply) => {
  reply.send({ route: 'register' });
};
