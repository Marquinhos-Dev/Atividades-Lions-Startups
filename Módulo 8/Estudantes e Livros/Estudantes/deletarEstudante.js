
let {estudantes,} = require('../data')

function deletarEstudante(req, res){

    const id = req.params;

    let index = estudantes.findIndex(estudante => estudante.ID == id);

    if(index < 0){

        res.status(404).send({message:`Aluguel não encontrado!`})
    } else{
      
        let estudanteDeletado = estudantes.splice(index,1);
      
        res.status(201).send({
            message: "Aluguel atualizado com sucesso!",
            deletado: estudanteDeletado,
        });
    }
}

module.exports = deletarEstudante