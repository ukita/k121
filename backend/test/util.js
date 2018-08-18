const mongoose = require("mongoose");
const supertest = require("supertest");

const app = require("../src/app");

const mongooseOptions = {
  autoIndex: false,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  connectTimeoutMS: 10000,
  useNewUrlParser: true
};

mongoose.Promise = Promise;

async function connectMongoose() {
  return mongoose.connect(
    global.__MONGO_URI__,
    {
      ...mongooseOptions,
      dbName: global.__MONGO_DB_NAME__
    }
  );
}

async function clearDatabase() {
  await mongoose.connection.db.dropDatabase();
}

async function disconnectMongoose() {
  return mongoose.disconnect();
}

function request() {
  return supertest.agent(app.listen());
}

module.exports = {
  connectMongoose,
  clearDatabase,
  disconnectMongoose,
  request
};
