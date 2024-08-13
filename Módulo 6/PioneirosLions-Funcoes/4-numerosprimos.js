/*
Crie uma função chamada isPrime que aceite um número e retorne true se o
número for primo e false caso contrário.

Dica: Um número primo é um número maior que 1 que não tem divisores positivos
além de 1 e ele mesmo. Para verificar se um número é primo, você pode testar
se ele é divisível por qualquer número entre 2 e a raiz quadrada do número.
Você pode usar a função sqrt() da biblioteca Math para calcular isso.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

function isPrime(numeroRecebido){

    let divisor = 2

    while(numeroRecebido % divisor != 0){

    divisor++}

    return (divisor == numeroRecebido)
}

// Testando a função
console.log(isPrime(7))