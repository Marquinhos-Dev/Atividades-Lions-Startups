
let valor
let numeros = [27,10,3,0,20,5,6,3]
let numerosPares = []
let numerosImpares = []

console.log()
console.log(`--> Digite um número:`)

process.stdin.once('data', function(data){

    valor = parseFloat(data.toString().trim())

    funcaoCalcular()

    process.exit()
})

function funcaoCalcular(){

numeros.push(valor)

    for(i=0; i<=numeros.length; i++){

        if(numeros[i] % 2 == 0){

            numerosPares.push(numeros[i])

        } else{

            numerosImpares.push(numeros[i])
        }
    }

    console.log()
    console.log(`--> Dentre os números ${numeros}:`)
    console.log(`- Os números ${numerosPares} são pares!`)
    console.log(`- Os números ${numerosImpares} são ímpares!`)
    console.log()

}

