export const login = (req, reply) => {
  console.log(req.body);
  reply.send({ route: 'login' });
};

export const register = (req, reply) => {
  console.log(req.body);
  reply.send({ route: 'register' });
};
