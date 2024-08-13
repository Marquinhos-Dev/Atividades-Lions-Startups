
// Declara as variáveis
let nome
let idade
const ano = 2024

console.log(`Qual seu nome?`)

// Inicia a coleta de dados do usuário
process.stdin.once('data', function(data){
    
    // Armazena o nome do usuário
    nome = data.toString().trim()

    console.log(`Quantos anos você tem?`)

    process.stdin.once('data', function(data){

        // Armazena a idade do usuário
        idade = parseInt(data.toString().trim())

        // Executa a função 'resposta'
        resposta()

        // Encerra o comando de coleta de dados
        process.exit()

    })
})

function resposta(){

    // Calcula o ano de nascimento do usuário
    anoDeNascimento = ano-idade

    // Devolve o ano de nascimento do usuário se ele fez aniversário esse ano, ou não
    console.log(`Olá ${nome}, se você já fez aniversário esse ano, você nasceu em ${anoDeNascimento}! Se ainda não fez aniversário, você nasceu em ${anoDeNascimento-1}!`)
}

