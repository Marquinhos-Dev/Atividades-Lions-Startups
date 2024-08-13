
let notas = [7.5,8.0,8.0,6.0,9.5,5.0,8.5,7.0,10,6.5,9.0]
let somaNotas = 0
let media
let maiorNota = notas[0]
let menorNota = notas[0]
let reprovados = []
let aprovados = []

for(let i = 0; i < notas.length; i++){

    if(notas[i] > maiorNota){

        maiorNota = notas[i]

    } else if(notas[i] < menorNota){

        menorNota = notas[i]
    }
    if(notas[i] > 6){

        aprovados.push(notas[i])

    } else{

        reprovados.push(notas[i])
    }

    somaNotas += notas[i]
}

media = somaNotas/notas.length

console.log(`--> A maior nota é ${maiorNota}!`)
console.log(`--> A menor nota é ${menorNota}!`)
console.log(`--> A média das notas é ${media}!`)
console.log(`--> Existem ${aprovados.length} notas acima da média 6.0, são elas: ${aprovados}!`)
console.log(`--> Existem ${reprovados.length} notas abaixo da média 6.0, são elas: ${reprovados}!`)

