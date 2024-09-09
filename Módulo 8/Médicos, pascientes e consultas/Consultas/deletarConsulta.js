
let {consultas} = require('../data')

function deletarConsulta(req, res){

    const id = req.params;

    let index = consultas.findIndex(consulta => consulta.ID == id);

    if(index < 0){

        res.status(404).send({message:`Consulta não encontrado!`})
    } else{
      
        let consultaDeletada = consultas.splice(index,1);
      
        res.status(201).send({
            message: "Consulta deletada com sucesso!",
            deletado: consultaDeletada,
        });
    }
}

module.exports = deletarConsulta