
const {livros} = require('../data')

function listarLivros(req,res){
    res.send(livros)
}

module.exports = listarLivros