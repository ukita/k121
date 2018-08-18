const NodeEnvironment = require("jest-environment-node");
const MongodbMemoryServer = require("mongodb-memory-server");

class MongoDbEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.mongod = new MongodbMemoryServer.default({
      binary: {
        version: "4.0.1"
      }
    });
  }

  async setup() {
    await super.setup();
    this.global.__MONGO_URI__ = await this.mongod.getConnectionString();
    this.global.__MONGO_DB_NAME__ = await this.mongod.getDbName();
  }

  async teardown() {
    await super.teardown();
    await this.mongod.stop();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = MongoDbEnvironment;
