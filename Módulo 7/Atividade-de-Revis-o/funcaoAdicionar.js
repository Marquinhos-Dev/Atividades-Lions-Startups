
let array = require('./contatos')

function funcaoAdicionar(nome,email,telefones){

    if(index = array.find(verificar => verificar.email == email)){

        return false
    } else{
        
        array.push({ID: (array[array.length-1].ID +1), nome,email,telefones})
        return true
    }
}

module.exports = {funcaoAdicionar}