
let {baralhos} = require('../app')

function criarBaralho(titulo){

    if(baralhos.find(verificar => verificar.titulo == titulo)){
        return false
    } else{
        let ID = baralhos[baralhos.length -1].ID +1

        baralhos.push({ID,titulo})

        return true
    }
}

module.exports = criarBaralho