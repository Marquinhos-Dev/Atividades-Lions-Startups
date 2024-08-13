
function listarMoradores(residencias,casa){

    residencias[casa].moradores.forEach((nome,index) => {
        console.log(`${index +1} - ${nome}`)
    });
}

module.exports = listarMoradores