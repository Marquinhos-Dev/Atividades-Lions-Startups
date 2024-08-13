

function deletarUmaSessao(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,callback){

    listarSessoes(sessoesDeFilmes)

    console.log()

    let opcaoParaDeletarSessao = parseInt(perguntinhaTopeParaEntradaDeDados(`Deseja cancelar qual sessão 👆? `)) - 1

    if(opcaoParaDeletarSessao < 0 || opcaoParaDeletarSessao > sessoesDeFilmes.length || isNaN(opcaoParaDeletarSessao)){

        console.log(`Digite um número válido 👀!`)
        
        deletarUmaSessao(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,callback)
    }

    sessoesDeFilmes.splice(opcaoParaDeletarSessao,1)

    console.log(`\nSessão cancelada com sucesso 😃!`)

    callback()
}

module.exports = { deletarUmaSessao }