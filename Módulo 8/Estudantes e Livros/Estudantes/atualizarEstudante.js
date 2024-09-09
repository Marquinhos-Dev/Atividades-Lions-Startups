
let {estudantes,} = require('../data')

function atualizarEstudante(req, res){

    const id = req.params;

    let index = estudantes.findIndex(estudante => estudante.ID == id);

    if(index < 0){

        res.status(404).send({message:`Aluguel não encontrado!`})
    } else{

        const estudante = {
            ID: estudantes[index].ID,
            nome: req.body.nome,
            matricula: req.body.matricula,
            curso: req.body.curso,
            ano: req.body.ano,
        };
      
        estudantes[index] = estudante;
      
        res.status(201).send({
            message: "Aluguel atualizado com sucesso!",
            atualizado: estudante,
        });
    }
}

module.exports = atualizarEstudante