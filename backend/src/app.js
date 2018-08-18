const Koa = require("koa");
const koaBody = require("koa-body");
const Router = require("koa-router");
const cors = require("@koa/cors");
const { shuffle } = require("lodash");

const User = require("./user");
const { sendRaffleEmail } = require("./services/email");

const app = new Koa();
const router = new Router();

app.use(koaBody());
app.use(
  cors({
    origin: "*"
  })
);

router.get("/users", async ctx => {
  const users = await User.find();
  ctx.body = users;
});

router.get("/users/:id", async ctx => {
  const user = await User.findById(ctx.params.id);
  if (user) {
    ctx.body = user;
    return;
  }

  ctx.status = 404;
});

router.post("/users", async ctx => {
  const { user: userParams } = ctx.request.body;
  const user = await User.create({
    name: userParams.name,
    email: userParams.email
  });

  ctx.status = 201;
  ctx.body = user;
});

router.put("/users/:id", async ctx => {
  const { user: userParams } = ctx.request.body;
  const user = await User.findByIdAndUpdate(ctx.params.id, userParams, {
    new: true
  });

  if (user) {
    ctx.body = user;
    return;
  }

  ctx.status = 404;
});

router.delete("/users/:id", async ctx => {
  const user = await User.findByIdAndRemove(ctx.params.id);
  if (user) {
    ctx.status = 204;
    return;
  }

  ctx.status = 404;
});

router.post("/raffle", async ctx => {
  const users = await User.find();
  const shuffled = shuffle(users);

  const raffled = shuffled.map((user, index, users) => {
    const nextIndex = (index + 1) % users.length;
    const nextUser = users[nextIndex];

    user.friend = nextUser.name;
    return user;
  });

  await User.updateMany(raffled);
  sendRaffleEmail(raffled);
  ctx.body = { message: "Draw was successful" };
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
