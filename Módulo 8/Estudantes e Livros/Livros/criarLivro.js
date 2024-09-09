
let {livros} = require('../data')

function criarLivro(req, res){

    const livro = {
      ID: livros[livros.length -1].ID +1,
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano,
      genero: req.body.genero,
    };

    livros.push(livro);

    res.status(201).send({
      message: "Livro criado com sucesso!",
      criado: livro,
    });
}

module.exports = criarLivro