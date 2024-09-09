
let {medicos} = require('../data')

function deletarMedico(req, res){

    const id = req.params;

    let index = medicos.findIndex(medico => medico.ID == id);

    if(index < 0){

        res.status(404).send({message:`Aluguel não encontrado!`})
    } else{
      
        let medicoDeletado = medicos.splice(index,1);
      
        res.status(201).send({
            message: "Médico deletado com sucesso!",
            deletado: medicoDeletado,
        });
    }
}

module.exports = deletarMedico