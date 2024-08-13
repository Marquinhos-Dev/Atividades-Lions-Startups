

function editarFilmesQueJaExistem(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,callback){

    const { verificarSeNaoHaRepeticaoDeSessao } = require('./funcaoVerificarErrosEntreSessoes')

    listarSessoes(sessoesDeFilmes)

    console.log()

    let opcaoParaModificar = parseInt(perguntinhaTopeParaEntradaDeDados(`Deseja atualizar qual sessão 👆?`)) - 1

    if(opcaoParaModificar < 0 || opcaoParaModificar > sessoesDeFilmes.length || isNaN(opcaoParaModificar)){

        console.log(`Digite um número válido 👀!`)
        
        editarFilmesQueJaExistem(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,callback)
    }

    console.log()

    let nomeDoFilme = perguntinhaTopeParaEntradaDeDados(` 🤩 Digite o novo nome do filme: `)
    let dataDoFilme = perguntinhaTopeParaEntradaDeDados(` 🗓️ Digite a nova data do filme: `)
    let horarioDoFilme = perguntinhaTopeParaEntradaDeDados(` 🕒 Digite o novo horário da sessão: `)
    let salaDoFilme = parseInt(perguntinhaTopeParaEntradaDeDados(` 🔢 Digite o novo número da sala: `))

    verificarSeNaoHaRepeticaoDeSessao(sessoesDeFilmes,editarFilmesQueJaExistem,dataDoFilme,horarioDoFilme,salaDoFilme)

    sessoesDeFilmes[opcaoParaModificar].nome = nomeDoFilme
    sessoesDeFilmes[opcaoParaModificar].data = dataDoFilme
    sessoesDeFilmes[opcaoParaModificar].horario = horarioDoFilme
    sessoesDeFilmes[opcaoParaModificar].sala = salaDoFilme

    console.log(`\nSessão atualizadacom sucesso 😃!`)

    callback()
}

module.exports = { editarFilmesQueJaExistem }