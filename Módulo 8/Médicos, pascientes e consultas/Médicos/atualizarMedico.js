
let {medicos} = require('../data')

function atualizarMedico(req, res){

    const id = req.params;

    let index = medicos.findIndex(medico => medico.ID == id);

    if(index < 0){

        res.status(404).send({message:`Médico não encontrado!`})
    } else{

        const medico = {
            ID: medicos[index].ID,
            nome: req.body.nome,
            especialidade: req.body.especialidade,
        };
      
        medicos[index] = medico;
      
        res.status(201).send({
            message: "Médico atualizado com sucesso!",
            atualizado: medico,
        });
    }
}

module.exports = atualizarMedico