
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const {agendarEvento} = require('./agendarEvento')
const {listarEventos} = require('./listarEventos')
const {listarDadosDeEventos} = require('./listarDados')
const {comprarIngresso} = require('./comprarIngresso')
const {deletarIngresso} = require('./deletarIngresso')
const {listarIngressosDeEvento} = require('./listarIngressos')
const {cancelarEvento} = require('./cancelarEvento')

let Eventos = [{
    nome: 'Humanos Tour',
    artista: 'Oficina G3',
    data: 'Sexta 29/06',
    horario: '19:30',
    ingressos: [{
        nomeUtilizador: 'Marcos',
        idadeUtilizador: 20,
        tipoDeIngresso: 'VIP'
    }]
}]

exibirMenu()

function exibirMenu(){

    console.log(`
    |=============================================|
    |               Sassaki Eventos               |
    |=============================================|
    | 1 - Agendar evento                          |
    | 2 - Listar eventos                          |
    | 3 - Listar dados de eventos                 |
    | 4 - Comprar ingresso                        |
    | 5 - Deletar ingresso                        |
    | 6 - Listar ingressos de evento              |
    | 7 - Cancelar evento                         |
    | 8 - Sair                                    |
    |=============================================|
    `)

    rl.question(`--> Escolha uma opção: `,(opcao)=>{

        console.log()

        switch(opcao){
            case '1':
                agendarEvento(Eventos,rl,exibirMenu)
            break
            case '2':
                listarEventos(Eventos,rl,exibirMenu)
            break
            case '3':
                listarDadosDeEventos(Eventos,rl,exibirMenu)
            break
            case '4':
                comprarIngresso(Eventos,rl,exibirMenu)
            break
            case '5':
                deletarIngresso(Eventos,rl,exibirMenu)
            break
            case '6':
                listarIngressosDeEvento(Eventos,rl,exibirMenu)
            break
            case '7':
                cancelarEvento(Eventos,rl,exibirMenu)
            break
            case '8':
                rl.close()
            break
            default:
                console.log(`--> Opção inválida.`)
                exibirMenu()
            break
        }
    })
}
