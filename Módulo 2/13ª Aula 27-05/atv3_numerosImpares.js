
let numeros = [1,2,3,4,5,6,7,8,9,10]
let numerosImpares = []

for(i = 0; i<=numeros.length; i++){

    if(numeros[i] % 2 != 0){

        numerosImpares.push(numeros[i])
    }
}

console.log(numerosImpares)

