
let {flashcards} = require('../app')

function listarFlashcardPorBaralho(index){

    if(flashcards.length == 0){
        return false
    } else{
        let array = flashcards.filter(cartas => cartas.ID_baralho == index)
        array.forEach(carta =>{
            console.log(`${carta.ID} | ${carta.pergunta} : ${carta.resposta}`)
        })
        return true
    }
}

module.exports = listarFlashcardPorBaralho