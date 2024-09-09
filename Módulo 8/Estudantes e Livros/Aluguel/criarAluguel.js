
let {alugueis} = require('../data')

function criarAluguel(req, res){

    const aluguel = {
      ID: alugueis[alugueis.length -1].ID +1,
      ID_livro: req.body.ID_livro,
      ID_estudante: req.body.ID_estudante,
      dataEmprestimo: req.body.dataEmprestimo,
      dataDevolucao: req.body.dataDevolucao,
    };

    alugueis.push(aluguel);

    res.status(201).send({
      message: "Aluguel criado com sucesso!",
      criado: aluguel,
    });
}

module.exports = criarAluguel