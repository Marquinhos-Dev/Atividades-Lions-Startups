

// Declara as variáveis que serão utilizadas
let totalPares = 0
let totalImpares = 0
let somaPares = 0
let somaImpares = 0
let mediaPares = 0
let mediaImpares = 0

// Estrutura de repetição que analisa todos os números entre 0 e 999
for(let i = 0; i <= 999; i++){
    
    // Se o número é par:
    if(i%2==0){
        totalPares++    // Adiciona um número aos pares
        somaPares += i  // Soma o respectivo número aos pares
    } else{ // Se o número é ímpar:
        totalImpares++   // Adiciona um número aos ímpares
        somaImpares += i // Soma o respectivo número aos ímpares
    }
}

mediaPares = somaPares/totalPares
mediaImpares = somaImpares/totalImpares

console.log()
console.log(`|---------------------------------------|`)
console.log(`|  O total de números pares é: ${totalPares}      |`)
console.log(`|  O total de números ímpares é: ${totalImpares}    |`)
console.log(`|  A soma de todos os pares é: ${somaPares}   |`)
console.log(`|  A soma de todos os ímpares é: ${somaImpares} |`)
console.log(`|  A média dos números pares é: ${mediaPares}     |`)
console.log(`|  A média dos números ímpares é: ${mediaImpares}   |`)
console.log(`|---------------------------------------|`)
console.log()

if(mediaPares>mediaImpares){
    console.log(`A média dos números pares é maior que a dos números ímpares!`)
} else{
    console.log(`A média dos números ímpares é maior que a dos números pares!`)
}

