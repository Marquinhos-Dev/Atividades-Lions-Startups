
const prompt = require('prompt-sync')()
const adicionarMorador = require('./adicionarMorador')
const adicionarResidencia = require('./adicionarResidencia')
const listarMoradores = require('./listarMoradores')
const listarResidencias = require('./listarResidendias')
const atualizarResidencia = require('./atualizarResidencia')
const deletarMorador = require('./deletarMorador')
const deletarResidencia = require('./deletarResidencia')

let residencias = require('./residencias')

function menuInicial(){

    console.log(`
|==================================================|
|     Gerenciamento de Residências e Moradores     |
|==================================================|
| 1 - Adicionar Residência                         |
| 2 - Adicionar Morador a uma Residência           |
| 3 - Listar Residências existentes                |
| 4 - Listar Moradores de uma Residência           |
| 5 - Atualizar Residência existente               |
| 6 - Deletar Residência                           |
| 7 - Deletar Morador de uma Residência            |
| 8 - Sair                                         |
|==================================================|
`)

    let opcaoInicial = prompt('Escolha uma opção: ')
    let casa,nome
    console.log()

    switch(opcaoInicial){
        case '1':
            let bairro = prompt('Digite o bairro: ')
            let rua = prompt('Digite a rua: ')
            let numero = prompt('Digite o número: ')
            let moradores = []
            adicionarResidencia(residencias,{bairro,rua,numero,moradores})
            menuInicial()
        break
        case '2':
            listarResidencias(residencias)
            casa = parseInt(prompt('Deseja adicionar um morador em qual casa? ')) -1
            console.log()
            nome = prompt('Digite o nome do morador: ')
            adicionarMorador(residencias,casa,nome)
            menuInicial()
        break
        case '3':
            listarResidencias(residencias)
            menuInicial()
        break
        case '4':
            listarResidencias(residencias)
            casa = parseInt(prompt('Deseja listar os moradores de qual casa? ')) -1
            console.log()
            listarMoradores(residencias,casa)
            menuInicial()
        break
        case '5':
            listarResidencias(residencias)
            casa = parseInt(prompt('Deseja atualizar qual residência? ')) -1
            console.log()
            let novoBairro = prompt('Digite o novo bairro: ')
            let novaRua = prompt('Digite a nova rua: ')
            let novoNumero = prompt('Digite o novo numero: ')
            atualizarResidencia(residencias,novoBairro,novaRua,novoNumero,casa)
            menuInicial()
        break
        case '6':
            listarResidencias(residencias)
            casa = parseInt(prompt('Digite a residência que deseja deletar: ')) -1
            deletarResidencia(residencias,casa)
            menuInicial()
        break
        case '7':
            listarResidencias(residencias)
            console.log()
            casa = parseInt(prompt('Digite a residência que deseja deletar um morador: ')) -1
            console.log()
            listarMoradores(residencias,casa)

            console.log()
            nome = parseInt(prompt('Digite o morador que deseja deletar: ')) -1
            deletarMorador(residencias,casa,nome)
            menuInicial()
        break
        case '8':
            console.log(`--> Saindo...`)
        break
        default:
            console.log(`--> Escolha uma opção válida!`)
            menuInicial()
        break
    }
}

menuInicial()