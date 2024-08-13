
let quantasNotas = 10
let notas = []
let acimaDaMedia = []
let abaixoDaMedia = []
let maiorNota = notas[0]
let menorNota = notas[0]
let mediaNotas = 0
let somaNotas = 0

for(i = 0; i<quantasNotas; i++){

    console.log()
    console.log(`--> Me diga a ${i+1}ª nota:`)

    process.stdin.once('data', function(data){

        notas[i] = parseFloat(data.toString().trim())

        maiorMenor()

        process.exit()
    })
}

function maiorMenor(){

    if(notas[i] > maiorNota){

        maiorNota = notas[i]

    } else if(notas[i] < menorNota){

        menorNota = notas[i]
    }

    if(notas[i]<8){

        abaixoDaMedia.push(notas[i])
    }

    somaNotas += notas[i]

    if(i + 1 == notas.length){

        calcularMedia()
    }
}

function calcularMedia(){

    mediaNotas = (somaNotas / notas.length)

    for(i=0; i<notas.length; i++){

        if(notas[i]>=mediaNotas){

            acimaDaMedia.push(notas[i])
        }
    }

    console.log(`A maior nota é: ${maiorNota}`)
    console.log(`A menor nota é: ${menorNota}`)
    console.log(`A média de todas as notas é: ${mediaNotas}`)
    console.log(`As notas que estão acima dessa média são: ${acimaDaMedia}`)
    console.log(`As notas que estão abaixo de 8 são: ${abaixoDaMedia}`)
}

