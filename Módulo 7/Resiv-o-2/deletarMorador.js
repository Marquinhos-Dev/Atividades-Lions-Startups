
function deletarMorador(residencias,index,morador){

    residencias[index].moradores.splice(morador,1)

    console.log(`\n--> Morador deletado com sucesso!`)
}

module.exports = deletarMorador