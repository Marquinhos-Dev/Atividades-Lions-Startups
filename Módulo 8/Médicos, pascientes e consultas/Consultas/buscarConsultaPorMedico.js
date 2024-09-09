
const {consultas} = require('../data')

function buscarConsultaPorMedico(req,res){

    let { index } = req.query;

    let posicao = consultas.findIndex(consulta => consulta.ID_medico == index);

    if(posicao < 0){
        res.status(404).send({message:'Consulta referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:consultas[posicao]});
    };
}

module.exports = buscarConsultaPorMedico