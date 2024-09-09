
let {pascientes} = require('../data')

function atualizarPasciente(req, res){

    const id = req.params;

    let index = pascientes.findIndex(pasciente => pasciente.ID == id);

    if(index < 0){

        res.status(404).send({message:`Pasciente não encontrado!`})
    } else{

        const pasciente = {
            ID: pascientes[index].ID,
            nome: req.body.nome,
            dataNascimento: req.body.dataNascimento,
        };
      
        pascientes[index] = pasciente;
      
        res.status(201).send({
            message: "Pasciente atualizado com sucesso!",
            atualizado: pasciente,
        });
    }
}

module.exports = atualizarPasciente