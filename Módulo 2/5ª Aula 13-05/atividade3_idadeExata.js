
// Declara as variáveis
let nome
let idade
const ano = 2024
let aniversario
let fezAniversario

console.log(`Olá, qual seu nome?`)

// Inicia a coleta de dados do usuário
process.stdin.once('data', function(data){
    
    // Armazena o nome do usuário
    nome = data.toString().trim()

    console.log(`${nome}, quantos anos você tem?`)

    process.stdin.once('data', function(data){

        // Armazena a idade do usuário
        idade = parseInt(data.toString().trim())

        console.log(`${nome}, você já fez aniversário esse ano?`)

        process.stdin.once('data', function(data){
    
            // Armazena a resposta do usuário, se ele já fez aniversário esse ano
            aniversario = data.toString().trim()

            // Executa a função 'resposta'
            resposta()

            // Encerra o comando de coleta de dados
            process.exit()

        })

    })
})

function resposta(){

    // Calcula o ano de nascimento do usuário
    anoDeNascimento = 2024 - idade

    if ((aniversario == 'sim')||(aniversario == 'Sim')||(aniversario == 'SIM')){

        fezAniversario = true
    } else {

        fezAniversario = false
    }

    if (fezAniversario == true){

        // Devolve o ano de nascimento do usuário se ele fez aniversário
        console.log(`${nome}, você nasceu em ${anoDeNascimento}, correto?`)
    } else{

        // Devolve o ano de nascimento do usuário se ele não fez aniversário
        console.log(`${nome}, você nasceu em ${anoDeNascimento-1}, correto?`)
    }
}

