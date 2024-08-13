
let array = require('./contatos')

function funcaoEditar(index,nome,email,telefones){

    index = array.findIndex(verificar => verificar.ID == index)

    temporario = array[index].email
    array[index].email = ''

    if(array.find(verificar => verificar.email == email)){

        array[index].email = temporario
        return false

    } else{

        array[index] = {ID: array[index].ID,nome:nome,email:email,telefones:telefones}
        return true
    }
}

module.exports = {funcaoEditar}