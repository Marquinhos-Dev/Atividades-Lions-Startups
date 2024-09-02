let {baralhos} = require('../data')

function editarBaralho(req,res){

    let { ID } = req.params;

    let index = baralhos.findIndex(baraio => baraio.ID == ID);

    if(index < 0){
        res.status(404).send(`Baralho não encontrado`);
    } else{
        baralhos[index].titulo = req.body.titulo;
        res.status(202).send({message:`Baralho atualizado!`, editado:baralhos[index]});
    }
}

module.exports = editarBaralho