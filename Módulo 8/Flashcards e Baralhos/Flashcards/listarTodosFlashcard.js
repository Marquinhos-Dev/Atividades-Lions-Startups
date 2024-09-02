
let {flashcards} = require('../data')

function listarTodosFlashcard(req,res){

    res.status(200).send(flashcards);
}

module.exports = listarTodosFlashcard