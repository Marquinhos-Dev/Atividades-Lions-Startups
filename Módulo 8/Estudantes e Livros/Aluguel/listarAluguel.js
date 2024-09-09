
let {alugueis} = require('../data')

function listarAlugueis(req, res){

    res.status(201).send(alugueis);
}

module.exports = listarAlugueis