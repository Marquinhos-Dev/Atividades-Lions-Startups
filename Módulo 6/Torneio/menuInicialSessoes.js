
const perguntinhaTopeParaEntradaDeDados = require('prompt-sync')()

const { adicionarFilmes } = require('./funcaoAdicionar')
const { listarSessoes } = require('./funcaoListar')
const { editarFilmesQueJaExistem } = require('./funcaoAtualizar')
const { deletarUmaSessao } = require('./funcaoCancelar')

let sessoesDeFilmes = [{nome: 'Vingadores: Ultimato', data: '26/07/24', horario: '21:00', sala: 1}]

executarMenuInicial()

function executarMenuInicial(){

    console.log(`
    |=============================================|
    |      🤠 GERENCIAR SESSÕES DE FILMES 🤠      |
    |=============================================|
    | 1️⃣  - Adicionar nova sessão                  |
    | 2️⃣  - Listar todas as sessões                |
    | 3️⃣  - Atualizar uma sessão existente         |
    | 4️⃣  - Cancelar uma sessão                    |
    | 5️⃣  - Sair                                   |
    |=============================================|
    `)

    let opcaoInicial = perguntinhaTopeParaEntradaDeDados(`--> Escolha uma opção 👆: `)

    console.log()

    switch(opcaoInicial){
        case '1':
            adicionarFilmes(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,executarMenuInicial)
        break
        case '2':
            listarSessoes(sessoesDeFilmes)
            executarMenuInicial()
        break
        case '3':
            editarFilmesQueJaExistem(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,executarMenuInicial)
        break
        case '4':
            deletarUmaSessao(sessoesDeFilmes,perguntinhaTopeParaEntradaDeDados,listarSessoes,executarMenuInicial)
        break
        case '5':
            console.log(`Saindo 🏃🏃🏃\n`)
        break
        default:
            executarMenuInicial()
        break
    }
}

