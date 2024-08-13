
// Cria uma variável para o nome
let nome = ''

// Pergunta ao usoário
console.log('Qual seu nome?')

// Função chata para coletar dados do usoário
process.stdin.on('data', function(data){
    
    nome = data.toString()

    console.log('Seja bem vindo, '+nome)

    process.exit()
})

