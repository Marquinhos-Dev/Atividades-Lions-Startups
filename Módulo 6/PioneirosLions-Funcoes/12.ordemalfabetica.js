/*
Crie uma função chamada alphabeticalOrder que aceite uma string e retorne uma nova
string com as letras ordenadas em ordem alfabética.

Dica: Utilize o método split para converter a string em um array de caracteres.
Utilize o método sort para ordenar os caracteres. Utilize o método join para
juntar os caracteres em uma nova string.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

function alphabeticalOrder(caracterRecebida){

    let caracteresEmOrdem = caracterRecebida.split('').sort().join('')

    return caracteresEmOrdem
}

// Testando a função
console.log(alphabeticalOrder(''))