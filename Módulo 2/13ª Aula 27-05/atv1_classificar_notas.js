
let nota
let classificacaoNota
let aprovadoOuNao

console.log(`--> Me diga a sua nota:`)

process.stdin.once('data', function(data){

    nota = parseFloat(data.toString().trim())

    calcular()

    process.exit()
})

function calcular(){

    switch(true){
        case(0<=nota && nota<60):
        classificacaoNota = 'F'
        aprovadoOuNao = false
        break
        case(60<=nota && nota<70):
        classificacaoNota = 'D'
        aprovadoOuNao = false
        break
        case(70<=nota && nota<80):
        classificacaoNota = 'C'
        aprovadoOuNao = true
        break
        case(80<=nota && nota<90):
        classificacaoNota = 'B'
        aprovadoOuNao = true
        break
        case(90<=nota && nota<=100):
        classificacaoNota = 'A'
        aprovadoOuNao = true
        break
        default:
        aprovadoOuNao = 'ixe'
        break
    }

    if(aprovadoOuNao == 'ixe'){

        console.log(`--> Nota Inválida`)

    } else if(aprovadoOuNao == true){

        console.log(`Parabéns! Você tirou ${classificacaoNota}`)

    } else{

        console.log(`Você tirou ${classificacaoNota}`)
    }
}

