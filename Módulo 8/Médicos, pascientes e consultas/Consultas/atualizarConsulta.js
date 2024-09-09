
let {consultas} = require('../data')

function atualizarConsulta(req, res){

    const id = req.params;

    let index = consultas.findIndex(consulta => consulta.ID == id);

    if(index < 0){

        res.status(404).send({message:`Consulta não encontrado!`})
    } else{

        const consulta = {
            ID: consultas[index].ID,
            ID_medico: req.body.ID_medico,
            ID_pasciente: req.body.ID_pasciente,
            dataConsulta: req.body.dataConsulta,
            descricao: req.body.descricao,
        };
      
        consultas[index] = consulta;
      
        res.status(201).send({
            message: "Consulta atualizada com sucesso!",
            atualizado: consulta,
        });
    }
}

module.exports = atualizarConsulta