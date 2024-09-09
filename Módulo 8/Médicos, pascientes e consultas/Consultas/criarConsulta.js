
let {consultas} = require('../data')

function criarConsulta(req, res){

    const consulta = {
      ID: consultas[consultas.length -1].ID +1,
      ID_medico: req.body.ID_medico,
      ID_pasciente: req.body.ID_pasciente,
      dataConsulta: req.body.dataConsulta,
      descricao: req.body.descricao,
    };

    consultas.push(consulta);

    res.status(201).send({
      message: "Consulta criada com sucesso!",
      criado: consulta,
    });
}

module.exports = criarConsulta