
const {pascientes} = require('../data')

function buscarPascientePorNascimento(req,res){

    let { index } = req.query;

    let posicao = pascientes.findIndex(pasciente => pasciente.dataNascimento == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:pascientes[posicao]});
    };
}

module.exports = buscarPascientePorNascimento