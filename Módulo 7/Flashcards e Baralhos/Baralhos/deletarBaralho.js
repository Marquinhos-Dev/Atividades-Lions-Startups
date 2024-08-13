
let {baralhos} = require('../app')

function deletarBaralho(index){

    index = baralhos.findIndex(baraio => baraio.ID == index)

    if(index >= 0){
        baralhos.splice(index,1)
        return true
    } else{
        return false
    }
}

module.exports = deletarBaralho