
let {flashcards} = require('../app')

function atualizarFlashcard(index,pergunta,resposta){

    index = flashcards.findIndex(carta => carta.ID == index)

    if(index >= 0){
        flashcards[index].pergunta = pergunta
        flashcards[index].resposta = resposta
        return true
    } else{
        return false
    }
}

module.exports = atualizarFlashcard