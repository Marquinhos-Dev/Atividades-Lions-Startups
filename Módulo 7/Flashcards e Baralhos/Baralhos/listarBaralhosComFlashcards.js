
let {baralhos,flashcards} = require('../app')

function listarBaralhosComFlashcards(){

    if(baralhos.length == 0){
        return false
    } else{
        baralhos.forEach(baralho =>{
            console.log(`${baralho.ID} - ${baralho.titulo}`)
            let flashcardsDoBaralho = flashcards.filter(cartas => cartas.ID_baralho == baralho.ID)
            flashcardsDoBaralho.forEach(cartas =>{
                console.log(`${cartas.pergunta} - ${cartas.resposta}`)
            })
        })
        return true
    }
}

module.exports = listarBaralhosComFlashcards