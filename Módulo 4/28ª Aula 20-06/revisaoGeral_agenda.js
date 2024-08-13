
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let lembretes = []

menuInicial()

function menuInicial(){

    lembretes.forEach((lembrete,i)=>{
        lembrete.concluido = verificarPrazo(lembrete.concluido)
    })

    console.log(`
|========================================|
|               Sua Agenda               |
|========================================|
| 1- Cadastrar novo lembrete             |
| 2- Listar lembretes pendentes          |
| 3- Editar lembrete existente           |
| 4- Marcar lembrete como conlcuído      |
| 5- Sair                                |
|========================================|
    `)
    rl.question(`Escolha uma opção: `,(index)=>{

        console.log()

        index = parseInt(index)

        switch(index){
            case 1:
                cadastrarLembrete()
            break
            case 2:
                listarLembretes()
            break
            case 3:
                editarLembrete()
            break
            case 4:
                concluirLembrete()
            break
            case 5:
                rl.close()
            break
            default:
                console.log(`Opção inválida.`)
                voltarAoMenu()
            break
        }
    })

}
function cadastrarLembrete(){

    rl.question(`Digite um nome para o lembrete: `,(nome)=>{
    rl.question(`Digite um prazo final para seu lembrete: `,(prazo)=>{

    lembretes.push({nome:nome,prazo:prazo,concluido:false})

    voltarAoMenu()
})})
}
function listarLembretes(){

    lembretes.forEach((lembrete,i)=>{
        console.log(`${lembrete.nome} - ${lembrete.prazo} - ${lembrete.concluido}`)
    })

    voltarAoMenu()

}
function editarLembrete(){

    rl.question(`Deseja editar qual lembrete? `,(valor)=>{})

}
function concluirLembrete(){

}
function voltarAoMenu(){

    console.log()

    rl.question(`Pressione ENTER para voltar ao menu principal!`,(voltar)=>{
        menuInicial()
    })
}
function verificarPrazo(x){

    if(x === true){
        return 'Concluído'
    } else{
        return 'Pendente'
    }
}