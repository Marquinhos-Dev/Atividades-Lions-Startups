
let {baralhos,flashcards} = require('../data')

function listarFlashcardPorBaralho(req,res){

    let { ID } = req.params;

    let buscar = baralhos.findIndex(baraio => baraio.ID == ID);

    if(buscar < 0){
        res.status(404).send({message:'Baralho não encontrado!'});
    } else{

        let array = flashcards.filter(carta => carta.ID_baralho == ID);
        res.status(202).send(array);
    }
}

module.exports = listarFlashcardPorBaralho;