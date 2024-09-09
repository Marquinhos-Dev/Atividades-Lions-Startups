
let {alugueis} = require('../data')

function atualizarAluguel(req, res){

    const id = req.params;

    let index = alugueis.findIndex(aluguel => aluguel.ID == id);

    if(index < 0){

        res.status(404).send({message:`Aluguel não encontrado!`})
    } else{

        const aluguel = {
            ID: alugueis[index].ID,
            ID_livro: req.body.ID_livro,
            ID_estudante: req.body.ID_estudante,
            dataEmprestimo: req.body.dataEmprestimo,
            dataDevolucao: req.body.dataDevolucao,
        };
      
        alugueis[index] = aluguel;
      
        res.status(201).send({
            message: "Aluguel atualizado com sucesso!",
            atualizado: aluguel,
        });
    }
}

module.exports = atualizarAluguel