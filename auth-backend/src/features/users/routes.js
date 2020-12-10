const controller = require("./controller")

module.exports = (router) => {
  router.get("/usuarios", controller.index),
  router.get("/usuario/:id", controller.show),
  router.put("/usuario/:id", controller.refactory),
  router.delete("/usuario/:id", controller.erase)
};
