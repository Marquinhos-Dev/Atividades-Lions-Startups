

function listarSessoes(sessoesDeFilmes){

    if(sessoesDeFilmes.length != 0){

        console.log(`🥳🥳🥳🥳🥳 Lista de Filmes das Sessões 🥳🥳🥳🥳🥳\n`)

        sessoesDeFilmes.forEach((filme,index)=>{
            console.log(`${index + 1}. ${sessoesDeFilmes[index].nome} - ${sessoesDeFilmes[index].data} - ${sessoesDeFilmes[index].horario} - Sala ${sessoesDeFilmes[index].sala}`)
        })

    } else{
        console.log(`\nNão há sessões disponíveis 😫.`)

        executarMenuInicial()
    }
}

module.exports = { listarSessoes }