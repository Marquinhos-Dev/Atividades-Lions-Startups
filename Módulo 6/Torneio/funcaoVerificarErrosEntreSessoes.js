

function verificarSeNaoHaRepeticaoDeSessao(sessoesDeFilmes,callback,dataDoFilme,horarioDoFilme,salaDoFilme){

    let quantidadeDeRepetidos = 0

    if(isNaN(salaDoFilme)){
        console.log(`\nDigite um número válido para a sala 👀!`)
        callback()
    }

    sessoesDeFilmes.forEach((filme,index)=>{

        if(dataDoFilme == sessoesDeFilmes[index].data && horarioDoFilme == sessoesDeFilmes[index].horario && salaDoFilme == sessoesDeFilmes[index].sala){
            quantidadeDeRepetidos++
        }
    })

    if(quantidadeDeRepetidos != 0){

        console.log(`\nJá existe um filme nesse mesmo horário, data e sala 😬.`)
        callback()
    }
}

module.exports = { verificarSeNaoHaRepeticaoDeSessao }