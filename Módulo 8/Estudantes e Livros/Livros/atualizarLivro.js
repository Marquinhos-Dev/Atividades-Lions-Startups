
let {livros} = require('../data')

function atualizarLivro(req, res) {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;
  
    const livro = livros.find((l) => l.id == id);
  
    if (!livro) {
      return res.status(404).send({ message: 'Livro não encontrado' });
    }
  
    livro.titulo = novoTitulo;
    res.status(200).send({
      message: 'Livro atualizado com sucesso!',
      livro: livro
    });
}

module.exports = atualizarLivro