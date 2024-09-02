
let {flashcards} = require('../data')

function buscarFlashcardPorPergunta(req,res){

    let { ID } = req.params;

    let index = flashcards.findIndex(carta => carta.pergunta == index);

    if(index < 0){
        res.status(404).send({message:'Flashcard não encontrado!'});
    } else{
        res.status(202).send({encontrado:flashcards[index]});
    };
}

module.exports = buscarFlashcardPorPergunta