/*
Este é um arquivo com desafios extras. Eles são mais difíceis e vão exigir mais pesquisa.
Se você não conseguir fazer todos, não tem problema, se concentre nos exercícios do 1 ao 12.

1. Crie uma função chamada intersection que aceite dois arrays e retorne um novo array contendo
apenas os elementos que estão presentes em ambos os arrays.

Dica: Utilize o método filter para encontrar os elementos comuns. Utilize o método
includes para verificar se um elemento está presente no outro array.

Programa desenvolvido por:
 - Eduardo Raimundo
 - Marcos
 - Pedro
 - Thais
*/

/*
2. Crie uma função chamada drawEvenNumberTriangle que aceite um número n, use a função
getEvenNumbers para gerar os primeiros n números pares e, em seguida, use esses números
para desenhar um triângulo no console.

Dica: Primeiro, crie a função getEvenNumbers que retorna os primeiros n números pares.
Use um laço para iterar desde 1 até n e, em cada iteração, imprima os primeiros i
números pares. Utilize a função getEvenNumbers para obter os números pares.
*/

// EXERCÍCIO 1
function intersection(array1,array2){

    return array1.filter(valor => array2.includes(valor))
}

// Testando a função
// console.log(intersection([1,2,3,4,],[2,4,6,8]))

function drawEvenNumberTriangle(numero){

    let numerosPares = getEvenNumbers(numero)

    for(let x = 1; x <= numero; x++){

        let triangulo = ``

        for(let y = 0; y < x; y++){

            triangulo += numerosPares[y] + ``
        }

        console.log(triangulo.trim())
    }   
}

// EXERCÍCIO 2
function getEvenNumbers(numero){

    let numerosPares = []

    for(let i = 1; i <= numero; i++){

        numerosPares.push(i * 2)
    }

    return numerosPares
}

// Testando o programa
(drawEvenNumberTriangle(5))