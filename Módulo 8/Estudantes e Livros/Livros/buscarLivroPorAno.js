
const {estudantes,livros,alugueis} = require('../data')

function buscarLivroPorAno(req,res){

    let { index } = req.query;

    let posicao = livros.findIndex(livro => livro.ano == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:livros[posicao]});
    };
}

module.exports = buscarLivroPorAno