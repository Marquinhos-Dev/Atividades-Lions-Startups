
const {livros} = require('../data')

function deletarLivro(req, res) {
    const { id } = req.params;
    const index = livros.findIndex((l) => l.id == id);
  
    if (index === -1) {
      return res.status(404).send('Livro não encontrado!');
    }
  
    const livroDeletado = livros.splice(index, 1)[0];
  
    res.status(200).send({
      message: 'Livro deletado com sucesso!',
      livro: livroDeletado
    });
}

module.exports = deletarLivro