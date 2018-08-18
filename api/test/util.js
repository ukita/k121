const mongoose = require("mongoose");

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

module.exports = { connectMongoose, clearDatabase, disconnectMongoose };
