// Comando para importar o comando 'prompt' para usar para a entrada de dados
const prompt = require('prompt-sync')({sigint: true})

// Função inicial, para escolher entre as funções do CRUD 'cadastro' e as funções do array de números
function inicio(){

    console.log(`
    |=======================================|
    |          Lista de Exercícios          |
    |=======================================|
    | 1 - CRUD                              |
    | 2 - Funções de array                  |
    | 3 - Finalizar                         |
    |=======================================|
    
    --> Escolha uma opção:
    `)

    let opcaoInicial = prompt(``)

    switch(opcaoInicial){
        case '1':
            gerenciamentoDeConsultas()
        break
        case '2':
            desenvolvimentoDeFuncoes()
        break
        case '3':
            console.log(`--> Saindo...`)
        break
        default:
            console.log(`--> Opção inválida!`)
            inicio()
        break
    }
}

inicio()

/* 01. Gerenciamento de Consultas */

let consultas = []

function menuConsultas(){

    console.log(`
    |========================================|
    |       Gerenciamento de Consultas       |
    |========================================|
    | 1 - Adicionar nova consulta            |
    | 2 - Listar todas as consultas          |
    | 3 - Atualizar uma consulta existente   |
    | 4 - Cancelar uma consulta              |
    | 5 - Voltar ao menu                     |
    |========================================|
    
    --> Escolha uma opção
    `)

    let opcaoConsulta = prompt(``)

    switch(opcaoConsulta){
        case '1':
            adicionarConsulta()
        break
        case '2':
            listarConsultas()
        break
        case '3':
            atualizarConsulta()
        break
        case '4':
            cancelarConsulta()
        break
        case '5':
            console.log(`--> Saindo...`)
        break
        default:
            console.log(`--> Opção inválida!`)
            menuConsultas()
        break
    }

}

/* 02. Desenvolvimento de Funções */

function desenvolvimentoDeFuncoes(){

}

// a. soma de todos os elementos do array

// b. média de todos os elementos do array

// c. maior número do array

// d. menor número do array

// e. array sem valores repetidos

// f. saudação para os nomes no console

// g. string invertida

// Função para adicionar uma nova consulta
function adicionarConsulta(){

    // Lista de perguntas para coletar os dados necessários para agendar uma consulta
    let nomeConsulta = prompt(`Qual seu nome? `)
    let doutorConsulta = prompt(`Deseja agendar uma consulta com quem? `)
    let dataConsulta = prompt(`Deseja agendar essa consulta em que dia? `)
    let horarioConsulta = prompt(`Deseja marcar para qual horário do dia? `)

    // Comando para criar um novo objeto dentro do array 'consultas' armazenando os dados coletados anteriormente
    consultas.push({nomeConsulta,doutorConsulta,dataConsulta,horarioConsulta})

    menuConsultas()
}

// Função para listar todas as consultas, e seus respectivos dados
function listarConsultas(){

    if(consultas.length == 0){

        console.log(`--> Nehuma consulta agendada!`)
    } else{
        consultas.forEach((consultasListadas,i) =>{

            console.log(`${i + 1}) ${consultasListadas[i].nome} -`)
        })
    }
}