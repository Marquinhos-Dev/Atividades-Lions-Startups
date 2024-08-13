/*
Bom dia João, estamos em uma dupla de dois:
apenas Marcos e Alex
*/

let numeroDeLados

console.log(`|=============================|`)
console.log(`|      Vamos jogar dados?     |`)
console.log(`|=============================|`)
console.log()
console.log(`--> Quantos lados tem o dado?`)

process.stdin.once('data',function(data){

    numeroDeLados = parseInt(data.toString().trim())

    let valorDoDado = Math.floor(Math.random() * numeroDeLados) + 1

    console.log()
    console.log(`--> O dado caiu em ${valorDoDado}`)

    process.exit()
})

