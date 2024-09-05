
const {estudantes,livros,alugueis} = require('../data')

function buscarLivroPorGenero(req,res){

    let { index } = req.query;

    let posicao = livros.findIndex(livro => livro.genero == index);

    if(posicao < 0){
        res.status(404).send({message:'Aluguel referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:livros[posicao]});
    };
}

module.exports = buscarLivroPorGenero