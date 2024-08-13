
let nota = []
let media

console.log()
console.log(`|========================================|`)
console.log(`|      COLÉGIO SESI DE PONTA GROSSA      |`)
console.log(`|========================================|`)
console.log(`|Qual sua primeira nota?                 |`)
console.log()

process.stdin.once('data', function(data){

    nota[0] = parseFloat(data.toString().trim())

    console.log()
    console.log(`|========================================|`)
    console.log(`|      COLÉGIO SESI DE PONTA GROSSA      |`)
    console.log(`|========================================|`)
    console.log(`|Qual sua segunda nota?                  |`)
    console.log()

    process.stdin.once('data', function(data){

        nota[1] = parseFloat(data.toString().trim())

        funcaoMediaNotas()

        process.exit()
    })
})

function funcaoMediaNotas(){

    media = ( nota[0] + nota[1] ) / 2

    if(media >= 7){

        console.log()
        console.log(`Parabéns! Você passou, pois tirou ${media}!`)
        
    } else{

        console.log()
        console.log(`Você reprovou, pois ficou com ${media} na média final, faz o L!`)
    }
}

