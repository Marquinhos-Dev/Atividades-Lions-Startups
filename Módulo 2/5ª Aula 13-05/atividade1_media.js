
// Declara as variáveis
let nota1
let nota2
let media

console.log(`Digite a primeira nota:`)

// Inicia a coleta de dados do usuário
process.stdin.once('data', function(data){
    
    // Armazena a primeira nota
    nota1 = parseFloat(data.toString().trim())

    console.log(`Digite a segunda nota:`)

    process.stdin.once('data', function(data){

        // Armazena a segunda nota
        nota2 = parseFloat(data.toString().trim())

        // Executa a função 'resposta'
        resposta()

        // Encerra o comando de coleta de dados
        process.exit()

    })
})

function resposta(){

    // Calcula a média entre as duas notas
    media = (nota1+nota2)/2

    // Devolve a média das notas do usuário
    console.log(`Sua média é igual a: ${media}`)
}

