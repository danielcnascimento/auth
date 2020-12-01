const Koa = require("koa");
const Router = require("koa-router");
const applyRoutes = require('./routes');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

module.exports = () => {
  console.log("Servidor rodando");

  applyRoutes(router)
  app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

  app.listen(5000);
};
