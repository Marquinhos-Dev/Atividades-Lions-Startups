/*
Crie uma função chamada countVowels que aceite uma string e retorne o número
de vogais na string. As vogais que devem ser contadas são 'a', 'e', 'i',
'o', 'u' (tanto maiúsculas quanto minúsculas).

Dica: Você pode usar um conjunto de vogais para verificar se cada caractere da
string é uma vogal. Utilize um laço para percorrer (você pode usar uma função
chamada .length para saber o tamanho da string, e vowels.includes para ver
se o caracter faz parte da string) cada caractere da string e um contador
para contar quantas vezes uma vogal aparece.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

function countVowels(palavra){

    palavra = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()

    let vogais = 'aeiou'
    let quantidadeDeVogais = 0
    
    for (let i = 0; i < palavra.length; i++){

        if (vogais.includes(palavra[i])) {
            quantidadeDeVogais++
        }
    }
    return quantidadeDeVogais
}

// Testando a função
console.log(countVowels('joão'))