
let {flashcards} = require('../app')

function deletarFlashcard(index){

    index = flashcards.findIndex(carta => carta.ID == index)

    if(index >= 0){
        flashcards.splice(index,1)
        return true
    } else{
        return false
    }
}

module.exports = deletarFlashcard