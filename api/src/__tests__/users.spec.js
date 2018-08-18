const {
  connectMongoose,
  clearDatabase,
  disconnectMongoose
} = require("../../test/util");

beforeAll(connectMongoose);

beforeEach(clearDatabase);

afterAll(disconnectMongoose);

test("some test", () => {
  expect(true).toBeTruthy();
});
