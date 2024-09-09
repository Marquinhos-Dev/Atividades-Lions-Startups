
let {pascientes} = require('../data')

function listarPascientes(req, res){

    res.status(201).send(pascientes);
}

module.exports = listarPascientes