const { Router } = require("express");
const produtoController = require("./controllers/produtoController.js");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});

routes.get("/produtos",  produtoController.index);
routes.post("/store", produtoController.store);
routes.put("/update/:id", produtoController.update);
routes.delete("/destroy/:id", produtoController.destroy);


module.exports = routes;
