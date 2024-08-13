
let resposta
let quantasVezes
let i

console.log(`Me diga um número, e te darei a tabuada:`)

process.stdin.once('data', function(data){

    resposta = parseInt(data.toString().trim())

    console.log(`Quer multiplicar ${resposta} por quantos números?`)

    process.stdin.once('data', function(data){

        quantasVezes = parseInt(data.toString().trim())

        funcaoResposta()

        process.exit()
    })
})

function funcaoResposta(){

    for(i=0; i<=quantasVezes; i++){

        console.log(`${resposta} x ${i} = ${resposta*i}`)
    }
}

