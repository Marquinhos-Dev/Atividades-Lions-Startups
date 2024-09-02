
let {baralhos,flashcards} = require('../data');

function criarFlashcard(req,res){

    const novoFlashcard = {
        ID: flashcards[flashcards.length -1].ID +1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        ID_baralho: req.body.ID_baralho
    };

    let index = baralhos.findIndex(baraio => baraio.ID == novoFlashcard.ID_baralho);

    if(index < 0){
        res.status(404).send(`ID do baralho não encontrado!`);
    } else{
        flashcards.push(novoFlashcard);
        res.status(201).send({message:'Flashcard adicionado com sucesso!',novoFlashcard:novoFlashcard});
    }
}

module.exports = criarFlashcard;