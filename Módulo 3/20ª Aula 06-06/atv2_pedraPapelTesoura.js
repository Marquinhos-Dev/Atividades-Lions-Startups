
let opcoes = ['pedra','papel','tesoura']
let escolhaPC = Math.floor(Math.random() * opcoes.length)
let escolhaUsuario
let resposta

console.log(`Me diga sua resposta`) // tesoura

process.stdin.once('data',function(data){

    escolhaUsuario = ((data.toString().trim()).toLowerCase()).normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    calcularResultado()

    process.exit()
})

function calcularResultado(){

    switch(escolhaPC){
        case 0: // pedra

            switch(escolhaUsuario){
                case 'pedra':
                    resposta = 'Deu empate!'
                    break
                case 'papel':
                    resposta = 'Você ganhou!'
                    break
                case 'tesoura':
                    resposta = 'Você perdeu!'
            }
            break
        case 1: // papel

            switch(escolhaUsuario){
                case 'pedra':
                    resposta = 'Você perdeu!'
                    break
                case 'papel':
                    resposta = 'Deu empate!'
                    break
                case 'tesoura':
                    resposta = 'Você ganhou!'
            }
            break
        case 2: // tesoura
            
            switch(escolhaUsuario){
                case 'pedra':
                    resposta = 'Você ganhou!'
                    break
                case 'papel':
                    resposta = 'Você perdeu!'
                    break
                case 'tesoura':
                    resposta = 'Deu empate!'
            }
        default:
            resposta = 'ERRO 404'
    }

    console.log(`Você jogou ${escolhaUsuario} e o computador jogou ${opcoes[escolhaPC]}`)
    console.log()
    console.log(resposta)
}

