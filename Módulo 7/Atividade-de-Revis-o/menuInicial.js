
const prompt = require('prompt-sync')()

// Modularização das funções
const {funcaoListar} = require('./funcaoListar')
const {funcaoAdicionar} = require('./funcaoAdicionar')
const {funcaoExcluir} = require('./funcaoExcluir')
const {funcaoEditar} = require('./funcaoEditar')

let contatos = require('./contatos')

rodarMenuInicial()

function rodarMenuInicial(){

    console.log(`
    |=============================================|
    |       Menu Inicial - Crud 'contatos'        |
    |=============================================|
    | 1 - Adicionar contato à lista               |
    | 2 - Listar todo os contatos                 |
    | 3 - Editar contato existente                |
    | 4 - Excluir contato                         |
    | 5 - Sair                                    |
    |=============================================|
    `)

    let perguntaInicial = parseInt(prompt('--> Escolha uma opção: '))

    let nome,email,telefone,index,adicionar,confirmacao
    let telefones = []

    switch(perguntaInicial){
        case 1:

            console.log()

            nome = prompt(`Digite o nome do contato: `)
            email = prompt(`Digite o email do contato: `)
            
            do{
                telefone = prompt('Digite um telefone para o contato: ')
                telefones.push(telefone)
                adicionar = prompt('Deseja adicionar mais telefones?(Digite s/n): ')

            } while(adicionar == 's')

            if(funcaoAdicionar(nome,email,telefones) == true){
                
                console.log(`\n--> Contato adicionado com sucesso!`)
            } else{

                console.log('\n--> Já existe um contato com esse email! Tente novamente.')
            }

            rodarMenuInicial()

        break
        case 2:

            funcaoListar()
            rodarMenuInicial()

        break
        case 3:

            if(contatos.length == 0){

                console.log(`\n--> Não há contatos cadastrados!`)

                rodarMenuInicial()
            }

            funcaoListar()

            console.log()

            index = parseInt(prompt('Digite o ID do contato que deseja alterar: '))

            if(contatos.find(verificar => verificar.ID == index) == undefined){

                console.log(`\n--> Digite um ID válido!`)

                rodarMenuInicial()
            }

            nome = prompt(`Digite o nome do contato: `)
            email = prompt(`Digite o email do contato: `)
            
            do{
                telefone = prompt('Digite um telefone para o contato: ')
                telefones.push(telefone)
                adicionar = prompt('Deseja adicionar mais telefones?(Digite s/n): ')

            } while(adicionar == 's')

            console.log()

            if(prompt('Deseja mesmo editar esse contato?(Digite s/n): ').toLowerCase() == 's'){

                if(funcaoEditar(index,nome,email,telefones,confirmacao) == true){

                    console.log(`\n--> Contato alterado com sucesso!`)
                } else{

                    console.log(`\n--> Já existe um contato com esse email! Tente novamente.`)
                }
            } else{

                console.log(`\n--> Cancelado!`)
            }

            rodarMenuInicial()

        break
        case 4:

            if(contatos.length == 0){

                console.log(`\n--> Não há contatos cadastrados!`)

                rodarMenuInicial()
            }

            funcaoListar()

            console.log()

            index = parseInt(prompt('Digite o ID do contato que deseja excluir: '))

            if(contatos.find(verificar => verificar.ID == index) == undefined){

                console.log(`\n--> Digite um ID válido!`)

                rodarMenuInicial()
            }

            console.log()

            confirmacao = prompt('Deseja mesmo excluir esse contato?(Digite s/n): ')

            if(funcaoExcluir(index,confirmacao) == true){

                console.log(`\n--> Contato removido com sucesso!`)

            }else{

                console.log(`\n--> Exclusão cancelada!`)
            }

            rodarMenuInicial()
        break
        case 5:
            console.log(`\n--> Saindo...`)
        break
        default:
            console.log(`\n--> Escolha uma opção válida!`)
            rodarMenuInicial()
        break
    }
}