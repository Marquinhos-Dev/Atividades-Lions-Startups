
const {estudantes,livros,alugueis} = require('../data')

function buscarEstudantePorCurso(req,res){

    let { index } = req.query;

    let posicao = estudantes.findIndex(aluno => aluno.curso == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:estudantes[posicao]});
    };
}

module.exports = buscarEstudantePorCurso