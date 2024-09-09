
let {medicos} = require('../data')

function listarMedicos(req, res){

    res.status(201).send(medicos);
}

module.exports = listarMedicos