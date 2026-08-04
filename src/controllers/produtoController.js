const produto = require("../models");

class produtoController {
    async index(req, res){
        const produtos = await produto.body;
        return res.status(200).json(produtos);
    }
}
module.exports = new produtoController();