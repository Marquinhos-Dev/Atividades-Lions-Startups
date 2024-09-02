
let {baralhos} = require('../data');

function criarBaralho(req, res) {
    
    const novoBaralho = {
        ID: baralhos[baralhos.length -1].ID + 1,
        titulo: req.body.titulo
    };

    baralhos.push(novoBaralho);

    res.status(201).send({message: 'Baralho criado com sucesso!', criado:novoBaralho});
}

module.exports = criarBaralho;