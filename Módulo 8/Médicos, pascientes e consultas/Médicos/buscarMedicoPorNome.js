
const {medicos} = require('../data')

function buscarMedicoPorNome(req,res){

    let { index } = req.query;

    let posicao = medicos.findIndex(medico => medico.nome == index);

    if(posicao < 0){
        res.status(404).send({message:'Médico referente não encontrado!'});
    } else{
        res.status(202).send({encontrado:medicos[posicao]});
    };
}

module.exports = buscarMedicoPorNome