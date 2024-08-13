
let {baralhos} = require('../app')

function listarApenasBaralhos(){

    if(baralhos.length == 0){
        return false
    } else{

        baralhos.forEach(baralho =>{
            console.log(`${baralho.ID} - ${baralho.titulo}`)
        })
        return true
    }
}

module.exports = listarApenasBaralhos