import dovEnv from 'dotenv';

dovEnv.config();

const nodeEnv = process.env.NODE_ENV;

export const PORT = process.env.PORT || 3000;

export const DB = {
  HOST: process.env.MONGODB_HOST,
  USER: process.env.MONGODB_USERNAME,
  PASSWD: process.env.MONGODB_PASSWD,
  PORT: process.env.MONGODB_PORT,
  NAME: nodeEnv === 'test' ? process.env.MONGODB_TEST_NAME : process.env.MONGODB_NAME,
};

export const REDIS = {
  HOST: process.env.REDIS_HOST || 'localhost',
  PORT: process.env.REDIS_PORT || 6379,
};
