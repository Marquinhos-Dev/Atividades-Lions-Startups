
let {medicos} = require('../data')

function criarMedico(req, res){

    const medico = {
      ID: medicos[medicos.length -1].ID +1,
      nome: req.body.nome,
      especialidade: req.body.especialidade,
    };

    medicos.push(aluguel);

    res.status(201).send({
      message: "Médico criado com sucesso!",
      criado: medico,
    });
}

module.exports = criarMedico