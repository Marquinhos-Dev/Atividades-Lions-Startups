
let notas = []
let resposta1
let resposta2
let media

console.log(`Me diga uma nota:`)

process.stdin.once('data', function(data){

    notas[0] = parseFloat(data.toString().trim())

    console.log('Me diga a segunda nota:')

    process.stdin.once('data', function(data){

        notas[1] = parseFloat(data.toString().trim())

        funcaoResposta()

        process.exit()
    })
})

function funcaoResposta(){

    //notas.push(resposta1)
    //notas.push(resposta2)

    media = (notas[0]+notas[1])/2

    console.log(`A média entre as duas notas é: ${media}`)
}

