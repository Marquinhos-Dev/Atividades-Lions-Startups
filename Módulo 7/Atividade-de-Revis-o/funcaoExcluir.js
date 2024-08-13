
let array = require('./contatos')

function funcaoExcluir(index,confirmacao){

    if(confirmacao.toLowerCase() == 'n'){

        return false
        
    } else{

        index = array.findIndex(verificar => verificar.ID === index)

        array.splice(index,1)

        return true
    }
}

module.exports = {funcaoExcluir}