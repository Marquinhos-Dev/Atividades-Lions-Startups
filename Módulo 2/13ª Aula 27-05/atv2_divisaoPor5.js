
let valor

console.log(`--> Me diga uma valor numérico:`)

process.stdin.once('data', function(data){

    valor = parseFloat(data.toString().trim())

    calcular()

    process.exit()
})

function calcular(){

    if(valor % 5 == 0){

        console.log(`--> ${valor} é divisível por 5.`)
    } else{

        console.log(`--> ${valor} não é divisível por 5.`)
    }
}

