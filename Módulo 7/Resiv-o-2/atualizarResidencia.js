
function atualizarResidencia(residencias,novoBairro,novaRua,novoNumero,index){

    residencias[index].bairro = novoBairro
    residencias[index].rua = novaRua
    residencias[index].numero = novoNumero

    console.log(`\n--> Residência atualizada com sucesso!`)
}

module.exports = atualizarResidencia