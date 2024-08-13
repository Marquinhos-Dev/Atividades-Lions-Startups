
// Inicializa as variáveis e os vetores
let notas = [1,7,8,9,0]
let acimaDaMedia = []
let abaixoDaMedia = []
let maiorNota = notas[0]
let menorNota = notas[0]
let somaNotas = 0
let mediaNotas = 0

// Repete para todas as posições do vetor
for(i = 0; i< notas.length; i++){

    // Verifica se a nota atual é maior que a anterior
    if(notas[i] > maiorNota){

        maiorNota = notas[i]

    } else if(notas[i] < menorNota){

        menorNota = notas[i]
    }

    // Verifica se a nota atual é menor do que 8.0
    if(notas[i]<8){

        abaixoDaMedia.push(notas[i])
    }

    // Soma a nota atual com todas as anteriores
    somaNotas += notas[i]
}

// Calcula a média de todas as notas
mediaNotas = (somaNotas/notas.length)

for(i=0; i<notas.length; i++){

    // Verifica se a nota atual é maior do que a média de todas as notas
    if(notas[i]>=mediaNotas){

        acimaDaMedia.push(notas[i])
    }
}

// Exibe todos os valores para o usuário
console.log(`A maior nota é: ${maiorNota}`)
console.log(`A menor nota é: ${menorNota}`)
console.log(`A média de todas as notas é: ${mediaNotas}`)
console.log(`As notas que estão acima dessa méida são: ${acimaDaMedia}`)
console.log(`As notas que estão abaixo de 8 são: ${abaixoDaMedia}`)

