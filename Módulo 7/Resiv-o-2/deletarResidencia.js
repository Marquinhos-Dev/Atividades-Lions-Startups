
function deletarResidencia(residencias,index){

    residencias.splice(index,1)

    console.log(`\n--> Residência deletada com sucesso!`)
}

module.exports = deletarResidencia