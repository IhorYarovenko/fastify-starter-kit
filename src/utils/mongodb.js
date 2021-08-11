import Emmiter from './emmiter.js';

class MongodbRepository {
  /**
   *
   * @param { string } collection
   */
  constructor(collectionName) {
    Emmiter.once('connectToDB', (data) => {
      const db = data;
      this.collection = db.collection(collectionName);
    });
  }

  /**
   *
   * @param {{ skip: number, limit: number}} options
   * @returns {Promise<any[]>};
   */
  find(filter = {}, options = { skip: 0, limit: 10 }) {
    return this.collection
      .find(filter)
      .skip(options.skip)
      .limit(options.limit)
      .toArray();
  }

  /**
   *
   * @param {object} filter
   * @returns { Promise<*>}
   */
  findOne(filter = {}) {
    return this.collection
      .findOne(filter);
  }

  /**
   *
   * @param {object} filter;
   * @param {object} data;
   * @param {object} options;
   * @returns {Promise<*>};
   */
  updateOne(filter, data, options) {
    return this.collection.updateOne(filter, data, options);
  }

  /**
   *
   * @param {object} filter;
   * @returns {Promise<*>};
   */
  deleteOne(filter) {
    return this.collection.deleteOne(filter);
  }
}

export default MongodbRepository;
