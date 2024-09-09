
let {estudantes} = require('../data')

function listarEstudantes(req, res){

    res.status(201).send(estudantes);
}

module.exports = listarEstudantes