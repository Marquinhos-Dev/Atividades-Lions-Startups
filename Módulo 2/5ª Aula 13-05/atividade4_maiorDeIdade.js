
// Declara as variáveis
let nome
let idade

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

    
    if(idade>=18){

        // Responde que o usuário é maior de idade
        console.log(`${nome}, você é maior de idade!`)
    } else{

        // Responde que o usuário é menor de idade
        console.log(`${nome}, você é menor de idade!`)
    }
}

