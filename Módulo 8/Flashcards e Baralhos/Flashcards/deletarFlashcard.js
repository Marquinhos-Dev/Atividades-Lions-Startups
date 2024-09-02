let {flashcards} = require('../data')

function deletarFlashcard(req,res){

    const { ID } = req.params;

    let index = flashcards.findIndex(carta => carta.ID == ID);

    if(index < 0){
        res.status(404).send(`Flashcard não encontrado!`);
    } else{
        res.status(202).send({message:'Flashcard deletado!',deletado:flashcards[index]});
        flashcards.splice(index,1);
    }
}

module.exports = deletarFlashcard