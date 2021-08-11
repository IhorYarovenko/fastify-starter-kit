import fastifyMongodb from 'fastify-mongodb';
import mongodb from 'mongodb';
import Emmiter from '../utils/emmiter.js';
import { DB } from '../../config/env.js';

const url = `mongodb://${DB.USER}:${DB.PASSWD}@${DB.HOST}:${DB.PORT}/${DB.NAME}?authSource=admin`;
let db = {
  collection() {},
};

const initMongodb = (fastify) => mongodb.MongoClient.connect(url)
  .then((client) => {
    fastify.register(fastifyMongodb, { client })
      .register((fastify, opts, next) => {
        db = fastify.mongo.client.db('fastify');
        Emmiter.emit('connectToDB', db);
        next();
      });
  })
  .catch((err) => {
    throw err;
  });

export const getDB = () => db;

export default initMongodb;
