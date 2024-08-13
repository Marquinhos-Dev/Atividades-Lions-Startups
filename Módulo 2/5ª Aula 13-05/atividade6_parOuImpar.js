
// Declara as variáveis
let nome
let num

console.log(`Qual seu nome?`)

// Inicia a coleta de dados do usuário
process.stdin.once('data', function(data){
    
    // Armazena o nome do usuário
    nome = data.toString().trim()

    console.log(`Digite um número:`)

    process.stdin.once('data', function(data){

        // Armazena o número que o usuário digitou
        num = parseFloat(data.toString().trim())

        // Executa a função 'resposta'
        resposta()

        // Encerra o comando de coleta de dados
        process.exit()

    })
})

function resposta(){

    let numero = Math.floor(num)

    if(num == 0){
        console.log(`${nome}, ${num} é um número neutro!`)
    } else if(numero % 2 == 0){
        console.log(`${nome}, ${num} é um número par!`)
    } else{
        console.log(`${nome}, ${num} é um número ímpar!`)
    }
}

