/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

function averageArray(arrayRecebido){

    return arrayRecebido.reduce((x,y)=> x + y) / arrayRecebido.length
}

// Testando o array
console.log(averageArray([1,2,3,4]))