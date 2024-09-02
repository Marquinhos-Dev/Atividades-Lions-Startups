
let {flashcards} = require('../data');

function buscarFlashcardPorID(req,res){

    let { ID } = req.params;

    let index = flashcards.findIndex(carta => carta.ID == ID);

    if(index < 0){
        res.status(404).send({message:'Flashcard não encontrado!'});
    } else{
        res.status(202).send({encontrado:flashcards[index]});
    };
};

module.exports = buscarFlashcardPorID;