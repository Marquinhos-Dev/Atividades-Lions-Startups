
const {estudantes,livros,alugueis} = require('../data')

function buscarAluguelPorDevolucao(req,res){

    let { index } = req.query;

    let posicao = alugueis.findIndex(aluguel => aluguel.dataDevolucao == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:alugueis[posicao]});
    };
}

module.exports = buscarAluguelPorDevolucao