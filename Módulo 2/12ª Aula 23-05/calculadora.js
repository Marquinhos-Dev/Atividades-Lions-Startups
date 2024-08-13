
let valor1
let valor2
let operacao
let resposta

console.log(`--> Diga-me um valor numérico:`)

process.stdin.once('data', function(data){

    valor1 = parseFloat(data.toString().trim())

    console.log(`--> Diga-me um segundo valor numérico:`)

    process.stdin.once('data', function(data){

        valor2 = parseFloat(data.toString().trim())

        console.log(`--> Agora, diga-me a operação que quer realizar, utilizando '+', '-', '*', ou '/' :`)

        process.stdin.once('data', function(data){

            operacao = data.toString().trim()

            calcular()

            responder()

            process.exit()
        })
    })
})

function calcular(){

    if(operacao == '+'){

        resposta = valor1 + valor2

    } else if(operacao == '-'){

        resposta = valor1 - valor2

    } else if(operacao == '*'){

        resposta = valor1 * valor2

    } else if(operacao == '/'){

        resposta = valor1 / valor2

    } else{
        resposta = 'ixe'
    }
}

function responder(){

    if(resposta == 'ixe'){

        console.log(`Operação inválida!`)

    } else{

        console.log(`--> ${valor1}${operacao}${valor2} = ${resposta}`)
    }
}

