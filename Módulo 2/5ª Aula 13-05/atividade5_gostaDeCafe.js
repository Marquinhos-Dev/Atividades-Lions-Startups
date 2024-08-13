
// Declara as variáveis
let nome
let gostaDeCafe
let condicao

console.log(`Qual seu nome?`)

// Inicia a coleta de dados do usuário
process.stdin.once('data', function(data){
    
    // Armazena o nome do usuário
    nome = data.toString().trim()

    console.log(`Você gosta de café?(responda 'sim' ou 'não')`)

    process.stdin.once('data', function(data){

        // Armazena a resposta
        gostaDeCafe = data.toString().trim()

        // Executa a função 'resposta'
        resposta()

        // Encerra o comando de coleta de dados
        process.exit()

    })
})

function resposta(){

    if ((gostaDeCafe == 'sim')||(gostaDeCafe == 'Sim')||(gostaDeCafe == 'SIM')){

        // Atribui 'verdadeiro' à resposta do usuário
        condicao = true
    } else {

        // Atribui 'falso' à resposta do usuário
        condicao = false
    }

    if(condicao == true){

        // Responde caso o usuário goste de café
        console.log(`Somos dois, ${nome}, pois eu também gosto de café!`)
    } else{

        // Responde caso o usuário não goste de café
        console.log(`Muito sem graça você ${nome}`)
    }
}

