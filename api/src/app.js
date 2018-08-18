const Koa = require("koa");
const koaBody = require("koa-body");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.get("/", async ctx => {
  ctx.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
