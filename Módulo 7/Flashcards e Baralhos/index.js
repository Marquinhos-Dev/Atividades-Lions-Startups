
// Importação do prompt e dos arrays
const prompt = require('prompt-sync')()
let {flashcards,baralhos} = require('./app')

// Importação das funções
const criarBaralho = require('./Baralhos/criarBaralho')
const atualizarBaralho = require('./Baralhos/atualizarBaralho')
const deletarBaralho = require('./Baralhos/deletarBaralho')
const listarApenasBaralhos = require('./Baralhos/listarApenasBaralhos')
const listarBaralhosComFlashcards = require('./Baralhos/listarBaralhosComFlashcards')
const listarTodosFlashcard = require('./FlashCards/listarTodosFlashcard')
const listarFlashcardPorBaralho = require('./FlashCards/listarFlashcardPorBaralho')
const deletarFlashcard = require('./FlashCards/deletarFlashcard')
const criarFlashcard = require('./FlashCards/criarFlashcard')
const buscarFlashcardPorPergunta = require('./FlashCards/buscarFlashcardPorPergunta')
const atualizarFlashcard = require('./FlashCards/atualizarFlashcard')

// Função do menu inicial
function menuInicial(){

    console.log(`
    |=============================|
    |    FlashCards e Baralhos    |
    |=============================|
    | 1 - Baralhos                |
    | 2 - Flashcards              |
    | 3 - Sair                    |
    |=============================|
    `)

    let opcao = prompt(`--> Escolha uma opção: `)
    console.log()

    switch(opcao){

        case '1':
            menuBaralhos()
        break
        case '2':
            menuFlashcards()
        break
        case '3':
            console.log(`--> Saindo...`)
        break
        default:
            console.log(`\n--> Opção inválida!`)
            menuInicial()
        break
    }
}

function menuFlashcards(){

    let opcao,pergunta,resposta,ID_baralho

    console.log(`
    |====================================|
    |             Flashcards             |
    |====================================|
    | 1 - Criar Flashcard                |
    | 2 - Listar Flashcards              |
    | 3 - Listar Flashcards por Baralho  |
    | 4 - Atualizar Flashcard            |
    | 5 - Deletar Flashcard              |
    | 6 - Buscar Flashcards por Pergunta |
    | 7 - Retornar ao menu inicial       |
    |====================================|
    `)

    opcao = prompt(`--> Escolha uma opção: `)
    console.log()

    switch(opcao){

        case '1':
            pergunta = prompt(`Digite a pergunta para o flashcard: `)
            resposta = prompt(`Digite a resposta para o flashcard: `)
            console.log()
            listarApenasBaralhos()
            console.log()
            ID_baralho = parseInt(prompt(`Digite o ID do baralho para adicionar o flashcard: `))
            if(criarFlashcard(pergunta,resposta,ID_baralho) == false){
                console.log(`\n--> Digite um ID válido!`)
            } else{
                console.log(`\n--> Flashcard criado com sucesso!`)
            }
            menuFlashcards()
        break
        case '2':
            if(listarTodosFlashcard() == false){
                console.log(`\n--> Ainda não há flashcards criados!`)
            }
            menuFlashcards()
        break
        case '3':
            if(listarApenasBaralhos() == false){
                console.log(`\n--> Ainda não há baralhos cadastrados!`)
            } else{
                console.log()
                ID_baralho = parseInt(prompt(`Digite o ID do baralho que deseja listar os flashcards: `))
                console.log()
                if(listarFlashcardPorBaralho(ID_baralho) == false){
                    console.log(`\n--> Ainda não há flashcards criados nesse baralho!`)
                }
            }
            menuFlashcards()
        break
        case '4':
            if(listarTodosFlashcard() == false){
                console.log(`\n--> Ainda não há flashcards criados!`)
            } else{
                console.log()
                ID_baralho = parseInt(prompt(`Digite o ID do flashcard que deseja atualizar: `))
                console.log()
                pergunta = prompt(`Digite a nova pergunta do flashcard: `)
                resposta = prompt(`Digite a nova resposta do flashcard: `)
                if(atualizarFlashcard(ID_baralho,pergunta,resposta) == true){
                    console.log(`\n--> Flashcard atualizado com sucesso!`)
                } else{
                    console.log(`\n--> Digite um ID válido!`)
                }
            }
            menuFlashcards()
        break
        case '5':
            if(listarTodosFlashcard() == false){
                console.log(`--> Ainda não há flashcards criados!`)
            } else{
                ID_baralho = parseInt(prompt(`Digite o ID do flashcard que deseja deletar: `))
                if(prompt(`Deseja mesmo deletar esse flashcard?(Digite s/n) `).toLowerCase() == 'n'){
                    console.log(`\n--> Cancelado!`)
                } else{
                    if(deletarFlashcard(ID_baralho) == true){
                        console.log(`\n--> Flashcard deletado com sucesso!`)
                    } else{
                        console.log(`\n--> Digite um ID válido!`)
                    }
                }
            }
            menuFlashcards()
        break
        case '6':
            if(flashcards.length){
                console.log(`--> Ainda não há flashcards criados!`)
            } else{
                pergunta = prompt(`Digite a pergunta que deseja procurar: `)
                if(buscarFlashcardPorPergunta(pergunta) == false){
                    console.log(`\n--> Não encontrado!`)
                } else{
                    console.log(buscarFlashcardPorPergunta(pergunta))
                }
            }
            menuFlashcards()
        break
        case '7':
            console.log(`--> Retornando...`)
            menuInicial()
        break
        default:
            console.log(`--> Opção inválida!`)
            menuFlashcards()
        break
    }
}

function menuBaralhos(){

    let opcao,titulo,index

    console.log(`
    |============================================|
    |                  Baralhos                  |
    |============================================|
    | 1 - Criar Baralho                          |
    | 2 - Listar apenas os Baralhos              |
    | 3 - Listar Baralhos com seus flashcards    |
    | 4 - Atualizar Baralho                      |
    | 5 - Deletar Baralho                        |
    | 6 - Retornar ao menu inicial               |
    |============================================|
    `)

    opcao = prompt(`--> Escolha uma opção: `)
    console.log()

    switch(opcao){
        case '1':
            titulo = prompt(`Qual o título do baralho? `)
            if(criarBaralho(titulo)){
                console.log(`\n--> Baralho criado com sucesso!`)
            } else{
                console.log(`\n--> Já existe um baralho com esse título! Tente novamente.`)
            }
            menuBaralhos()
        break
        case '2':
            if(listarApenasBaralhos() == false){
                console.log(`--> Ainda não há baralhos cadastrados!`)
            }
            menuBaralhos()
        break
        case '3':
            if(listarBaralhosComFlashcards() == false){
                console.log(`\n--> Ainda não há baralhos cadastrados!`)
            }
            menuBaralhos()
        break
        case '4':

            if(listarApenasBaralhos() == false){
                console.log(`--> Ainda não há baralhos cadastrados!`)
            } else{

                console.log()
                index = parseInt(prompt(`Digite o ID do baralho que deseja atualizar: `))
                titulo = prompt(`Digite o novo nome para o baralho: `)
                if(atualizarBaralho(index,titulo) == true){
                    console.log(`\n--> Baralho atualizado com sucesso!`)
                } else{
                    console.log(`\n--> Digite um ID válido!`)
                }
            }
            menuBaralhos()
        break
        case '5':

            if(listarApenasBaralhos() == false){
                console.log(`--> Ainda não há baralhos cadastrados!`)
            } else{

                console.log()
                index = parseInt(prompt(`Digite o ID do baralho que deseja deletar: `))

                if(prompt(`Deseja mesmo deletar esse baralho?(Digite s/n) `).toLowerCase() == 'n'){
                    console.log(`\n--> Cancelado!`)
                } else{
                    if(deletarBaralho(index) == true){
                        console.log(`\n--> Baralho deletado com sucesso!`)
                    } else{
                        console.log(`\n--> Digite um ID válido!`)
                    }
                }
            }
            menuBaralhos()
        break
        case '6':
            console.log(`--> Retornando...`)
            menuInicial()
        break
        default:
            console.log(`--> Opção inválida!`)
            menuBaralhos()
        break
    }   
}

menuInicial()