
let {baralhos,flashcards} = require('../app')

function deletarBaralho(index){

    let deletarBaralho = baralhos.findIndex(baraio => baraio.ID == index)

    if(index >= 0){

        baralhos.splice(deletarBaralho,1)

        do{
            let deletarFlashcards = flashcards.findIndex(carta => carta.ID_baralho == index)
            flashcards.splice(deletarFlashcards,1)

        } while(flashcards.findIndex(carta => carta.ID_baralho == index) >= 0)

        return true
    } else{
        return false
    }
}

module.exports = deletarBaralho