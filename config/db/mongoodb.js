import mongoose from 'mongoose';

const connect = () => {
  try {
    let url = 'mongodb://';
    // let url = 'mongodb://admin:qwer1234@localhost:27017/fastify';

    url += `${process.env.MONGODB_USERNAME}:`;
    url += `${process.env.MONGODB_PASSWD}@`;
    url += `${process.env.MONGODB_HOST}:`;
    url += `${process.env.MONGODB_PORT}/`;
    url += `${process.env.MONGODB_NAME}`;
    url += '?authSource=admin';
    // console.log(url);

    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => {
        console.log('mongodb connect');
      });
  } catch (e) {
    console.error(e);
  }
};

export default connect;
