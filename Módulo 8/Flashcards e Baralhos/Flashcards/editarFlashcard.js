
let {baralhos,flashcards} = require('../data')

function editarFlashcard(req,res){

    let { ID } = req.params;

    let novoFlashcard = {
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        ID_baralho: req.body.ID_baralho
    };

    let index_ID_baralho = baralhos.findIndex(baraio => baraio.ID == novoFlashcard.ID_baralho);
    let index_flashcard = flashcards.findIndex(carta => carta.ID == ID);

    novoFlashcard.ID = flashcards[index_flashcard].ID;

    if(index_ID_baralho < 0 || index_flashcard < 0){
        res.status(404).send(`Baralho ou Flashcard não encontrado!`);
    } else{
        flashcards[index_flashcard] = novoFlashcard;
        res.status(202).send({message:`Flashcard atualizado!`, editado:novoFlashcard});
    }
}

module.exports = editarFlashcard