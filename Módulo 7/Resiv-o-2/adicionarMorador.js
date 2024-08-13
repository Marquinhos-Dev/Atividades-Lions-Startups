
function adicionarMorador(residencias,index,morador){

    residencias[index].moradores.push(morador)

    console.log(`\n--> Morador adicionado com sucesso!`)
}

module.exports = adicionarMorador