
let {estudantes} = require('../data')

function criarEstudante(req, res){

    const estudante = {
        ID: estudantes[estudantes.length -1].ID +1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano,
    };

    estudantes.push(estudante);

    res.status(201).send({
        message: "Aluguel criado com sucesso!",
        criado: estudante,
    });
}

module.exports = criarEstudante