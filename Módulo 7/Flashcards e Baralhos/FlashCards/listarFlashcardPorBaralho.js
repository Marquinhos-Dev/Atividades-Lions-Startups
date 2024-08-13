
let {flashcards,baralhos} = require('../app')

function listarFlashcardPorBaralho(index){

    if(flashcards.length == 0){
        return false
    } else{
        flashcards = flashcards.filter(cartas => cartas.ID_baralho == index)
        flashcards.forEach(carta =>{
            console.log(`${carta.ID} | ${carta.pergunta} : ${carta.resposta}`)
        })
        return true
    }
}

module.exports = listarFlashcardPorBaralho