
const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

// declara os arrays que serão usados no programa
let numeros = []
let numerosEmbaralhados = []
let ordemCrescente = []
let ordemDecrescente = []

let tamanho = 10

let posicao

for(let i = 0; i < tamanho; i++){
    numeros.push(i + 1)
}

for(let i = 0; i < tamanho; i++){

    posicao = Math.floor(Math.random()* numeros.length)

    numerosEmbaralhados.push(numeros[posicao])

    numeros.splice(posicao,1)
}

function cresente(){
    for(let x = 0; x < tamanho; x++){

        valor = numerosEmbaralhados[0]

        for(let i = 0; i < numerosEmbaralhados.length; i++){

            if(numerosEmbaralhados[i] <= valor){

                valor = numerosEmbaralhados[i]
                posicao = i
            }
        }
        ordemCrescente.push(valor)
        numerosEmbaralhados.splice(posicao,1)

    }
}