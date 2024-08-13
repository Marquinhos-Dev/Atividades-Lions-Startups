
const readline = require('readline')
let numero = Math.floor(Math.random(100)* 200) + 1
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
console.log(`--> Tente adivinhar o número entre 100 e 200:`)
console.log()

verificarResposta()

function verificarResposta(){

    rl.question(`Qual seu palpite? `, (line) => {
    
        line = parseInt(line)
        
        console.log()

        if(typeof(line) === 'number' && line > 100 && line < 200){

            numeroDeRodadas++

            if(numeroDeRodadas > limiteMaximoDeRodadas){

                console.log(`--> Limite de tentativas excecido, você perdeu!`)
                console.log()

                rl.close()

            } else{

                if (numero == line) {

                    console.log(`--> Parabéns, você acertou!`)
                    console.log()
                    
                    rl.close()
            
                } else if(numero > line){
            
                    console.log(`--> O número é maior...`)
                    console.log()
                    
                    verificarResposta()
            
                } else{
                    
                    console.log(`--> O número é menor...`)
                    console.log()
            
                    verificarResposta()
                }
            }

        } else{

            console.log(`--> Número inválido, digite novamente.`)
            console.log()

            verificarResposta()
        }
    })
}

