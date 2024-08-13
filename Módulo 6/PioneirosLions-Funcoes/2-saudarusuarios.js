/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

function greetUsers(nome) {
    nome.forEach(nome => {
    console.log(`Oi, ${nome}`)
});
}

const userNames = ['pedro', 'd', 'f'];
greetUsers(userNames);