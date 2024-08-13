
function listarResidencias(residencias){

    residencias.forEach((residencia,index) => {
        console.log(`${index + 1} - Rua ${residencia.rua} ${residencia.numero}, ${residencia.bairro}`)
    });
}

module.exports = listarResidencias