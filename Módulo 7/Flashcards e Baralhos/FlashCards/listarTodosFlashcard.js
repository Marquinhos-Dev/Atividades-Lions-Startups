
let {flashcards} = require('../app')

function listarTodosFlashcard(){

    if(flashcards.length == 0){
        return false
    } else{
        flashcards.forEach(carta =>{
            console.log(`${carta.ID} | ${carta.pergunta} : ${carta.resposta}`)
        })
        return true
    }

}

module.exports = listarTodosFlashcard