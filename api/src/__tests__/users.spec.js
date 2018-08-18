const User = require("../user");
const {
  connectMongoose,
  clearDatabase,
  disconnectMongoose,
  request
} = require("../../test/util");

beforeAll(connectMongoose);

beforeEach(clearDatabase);

afterAll(disconnectMongoose);

test("GET /users should returns a list of users", async () => {
  await User.create([
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Joana Doe", email: "joanadoe@example.com" }
  ]);

  const res = await request().get("/users");

  expect(res.status).toBe(200);
  expect(res.body.length).toBe(2);
});

test("GET /users/:id should return an user by the given id", async () => {
  const userParam = { name: "John Doe", email: "johndoe@example.com" };
  const user = await User.create(userParam);

  const res = await request().get(`/users/${user.id}`);

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(userParam.name);
  expect(res.body.email).toBe(userParam.email);
});

test("POST /users should create a new user", async () => {
  const userParam = { name: "John Doe", email: "johndoe@example.com" };

  const res = await request()
    .post("/users")
    .send({ user: userParam });

  expect(res.status).toBe(201);
  expect(res.body.name).toBe(userParam.name);
  expect(res.body.email).toBe(userParam.email);
});

test("PUT /users/:id should update an user", async () => {
  const user = await User.create({
    name: "John Doe",
    email: "johndoe@example.com"
  });

  const userParams = { name: "Joana Doe", email: "joanadoe@example.com" };
  const res = await request()
    .put(`/users/${user.id}`)
    .send({ user: userParams });

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(userParams.name);
  expect(res.body.email).toBe(userParams.email);
});

test("DELETE /users/:id should delete an user", async () => {
  const user = await User.create({
    name: "John Doe",
    email: "johndoe@example.com"
  });

  const res = await request().delete(`/users/${user.id}`);

  expect(res.status).toBe(204);
  expect(await User.findById(user.id)).toBe(null);
});

test("POST /raffle should raffle the users", async () => {
  await User.create([
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Joana Doe", email: "joanadoe@example.com" },
    { name: "Joe Doe", email: "joedoe@example.com" }
  ]);

  const res = await request().post("/raffle");

  expect(res.status).toBe(200);
  expect(res.body.message).toBe("Draw was successful");
});
