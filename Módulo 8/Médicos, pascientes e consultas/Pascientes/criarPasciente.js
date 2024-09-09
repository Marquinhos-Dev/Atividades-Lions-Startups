
let {pascientes} = require('../data')

function criarPasciente(req, res){

    const pasciente = {
      ID: pascientes[pascientes.length -1].ID +1,
      nome: req.body.nome,
      dataNascimento: req.body.dataNascimento,
    };

    pascientes.push(pasciente);

    res.status(201).send({
      message: "Pasciente criado com sucesso!",
      criado: pasciente,
    });
}

module.exports = criarPasciente