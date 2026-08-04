const { produto } = require("../models/produto.js");

class produtoController {
    async index(req, res){
        const produtos = await produto.findAll();
        return res.status(200).json(produtos);
    }
}