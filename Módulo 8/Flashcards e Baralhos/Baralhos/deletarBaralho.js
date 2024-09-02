let {baralhos} = require('../data')

function deletarBaralho(req,res){

    let { ID } = req.params;

    let index = baralhos.findIndex(baraio => baraio.ID == ID);

    if(index < 0){
        res.status(404).send(`Baralho não encontrado`);
    } else{
        let baralhoDeletado = baralhos.splice(index,1);
        res.status(202).send({message:`Baralho deletado!`, deletado:baralhoDeletado});
    }
}

module.exports = deletarBaralho