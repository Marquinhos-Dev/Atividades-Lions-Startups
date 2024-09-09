
let {pascientes} = require('../data')

function deletarPasciente(req, res){

    const id = req.params;

    let index = pascientes.findIndex(pasciente => pasciente.ID == id);

    if(index < 0){

        res.status(404).send({message:`Pasciente não encontrado!`})
    } else{
      
        let pascienteDeletado = pascientes.splice(index,1);
      
        res.status(201).send({
            message: "Pasciente deletado com sucesso!",
            deletado: pascienteDeletado,
        });
    }
}

module.exports = deletarPasciente