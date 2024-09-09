
let {consultas} = require('../data')

function listarConsultas(req, res){

    res.status(201).send(consultas);
}

module.exports = listarConsultas