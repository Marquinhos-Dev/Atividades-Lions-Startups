
let {flashcards,baralhos} = require('../app')

function criarFlashcard(pergunta,resposta,index){

    index = baralhos.findIndex(baraio => baraio.ID == index)

    if(index < 0){
        return false
    } else{
        let id = ((flashcards[flashcards.length -1].ID) +1)

        flashcards.push({ID: id,pergunta: pergunta,resposta: resposta,ID_baralho: index +1})
        return true
    }
}

module.exports = criarFlashcard