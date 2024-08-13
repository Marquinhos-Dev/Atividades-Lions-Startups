

function adicionarFilmes(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,callback){

    const { verificarSeNaoHaRepeticaoDeSessao } = require('./funcaoVerificarErrosEntreSessoes')

    let nomeDoFilme = perguntinhaTopeParaEntradaDeDados(` 🤩 Digite o nome do filme: `)
    let dataDoFilme = perguntinhaTopeParaEntradaDeDados(` 🗓️ Digite a data do filme: `)
    let horarioDoFilme = perguntinhaTopeParaEntradaDeDados(` 🕒 Digite o horário da sessão: `)
    let salaDoFilme = parseInt(perguntinhaTopeParaEntradaDeDados(` 🔢 Digite o número da sala: `))

    verificarSeNaoHaRepeticaoDeSessao(sessoesDeFilmes,adicionarFilmes,dataDoFilme,horarioDoFilme,salaDoFilme)

    sessoesDeFilmes.push({nome: nomeDoFilme,data: dataDoFilme,horario: horarioDoFilme,sala: salaDoFilme})

    console.log(`\nFilme adicionado com sucesso 😃!`)

    callback()
}

module.exports = { adicionarFilmes }