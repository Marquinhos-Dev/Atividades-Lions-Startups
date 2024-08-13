
let {flashcards} = require('../app')

function buscarFlashcardPorPergunta(index){

    index = flashcards.find(carta => carta.pergunta == index)

    if(index){
        return index.pergunta
    } else{
        return false
    }
}

module.exports = buscarFlashcardPorPergunta