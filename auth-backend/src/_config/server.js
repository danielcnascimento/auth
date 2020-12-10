const Koa = require("koa");
const cors = require('@koa/cors'); // faz que os endpoints sejam consumidos em outros IP/frontend.
const bodyParser = require('koa-bodyparser'); // faz com que requisições e responses sejam passados para JSON.
const Router = require("koa-router"); // permite criar rotas: router.get | router.post | router.put | router.delete.
const applyRoutes = require('./routes'); // pega o conjunto de rotas nessa pasta e aplica koa-router.


const app = new Koa();
const router = new Router();

module.exports = () => {
  console.log("Servidor rodando");

  applyRoutes(router)
  app.use(cors()).use(bodyParser()).use(router.routes()).use(router.allowedMethods());

  app.listen(5000);
};
