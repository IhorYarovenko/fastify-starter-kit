import mongoose from 'mongoose';
import { DB } from '../env.js';

const connect = () => {
  try {
    const url = `mongodb://${DB.USER}:${DB.PASSWD}@${DB.HOST}:${DB.PORT}/${DB.NAME}?authSource=admin`;

    return mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error(e);
  }
};

export default connect;
