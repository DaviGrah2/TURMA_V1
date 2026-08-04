const { Router } = require("express");
const produtoController = require("./controllers/produtoController.js");

const routes = Router();

routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Server on" });
});

routes.get("/produtos", (req, res) => produtoController.index(req, res));

module.exports = routes;
