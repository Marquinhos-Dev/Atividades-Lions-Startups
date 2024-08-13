
const readline = require('readline')
let numero = Math.floor(Math.random()* 100) + 1
let numeroDeRodadas = 0
let limiteMaximoDeRodadas = 10

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(`|=========================================|`)
console.log(`|   Seja bem vindo Jogo de Adivinhação!   |`)
console.log(`|=========================================|`)
console.log()
console.log(`--> Tente adivinhar o número entre 0 e 100:`)
console.log()

coletarResposta()

function coletarResposta(){

    rl.question(`Qual seu palpite? `, (line) => {
        
        console.log()
    
        line = parseInt(line)

        switch(verificarResposta(line)){
            case 'maior':
                console.log(`--> O número é menor...`)
                console.log()
                coletarResposta()
            break
            case 'menor':
                console.log(`--> O número é maior...`)
                console.log()
                coletarResposta()
            break
            case 'número inválido':
                console.log(`--> Número inválido, digite novamente.`)
                console.log()
                coletarResposta()
            break
            case 'limite atingido':
                console.log(`--> Limite de tentativas excecido, você perdeu!`)
                console.log()
                rl.close()
            break
            case 'vitória':
                console.log(`--> Parabéns, você acertou!`)
                console.log()
                rl.close()
        }
    })
}
function verificarResposta(line){

    if(typeof(line) === 'number' && line >= 0 && line <= 100){

        numeroDeRodadas++

        if(numeroDeRodadas > limiteMaximoDeRodadas){

            return 'limite atingido'

        } else{

            if(line > numero){

                return 'maior'

            } else if(line < numero){

                return 'menor'

            } else{

                return 'vitória'
            }
        }
    } else{

        return 'número inválido'
    }
}

