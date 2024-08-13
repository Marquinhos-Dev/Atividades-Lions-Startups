
let {baralhos} = require('../app')

function atualizarBaralho(index, titulo){

    index = baralhos.findIndex(verificar => verificar.ID == index)

    if(index >= 0){
        baralhos[index].titulo = titulo
        return true
    } else{
        return false
    }
}

module.exports = atualizarBaralho