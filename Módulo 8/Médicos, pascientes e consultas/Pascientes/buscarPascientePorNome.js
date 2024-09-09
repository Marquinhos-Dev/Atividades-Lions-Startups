
const {pascientes} = require('../data')

function buscarPascientePorNome(req,res){

    let { index } = req.query;

    let posicao = pascientes.findIndex(pasciente => pasciente.nome == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:pascientes[posicao]});
    };
}

module.exports = buscarPascientePorNome