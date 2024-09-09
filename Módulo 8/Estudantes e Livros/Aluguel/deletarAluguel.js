
let {alugueis} = require('../data')

function deletarAluguel(req, res){

    const id = req.params;

    let index = alugueis.findIndex(aluguel => aluguel.ID == id);

    if(index < 0){

        res.status(404).send({message:`Aluguel não encontrado!`})
    } else{
      
        let aluguelDeletado = alugueis.splice(index,1);
      
        res.status(201).send({
            message: "Aluguel deletado com sucesso!",
            deletado: aluguelDeletado,
        });
    }
}

module.exports = deletarAluguel