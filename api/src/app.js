const Koa = require("koa");
const koaBody = require("koa-body");
const Router = require("koa-router");

const User = require("./user");

const app = new Koa();
const router = new Router();

app.use(koaBody());

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

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
