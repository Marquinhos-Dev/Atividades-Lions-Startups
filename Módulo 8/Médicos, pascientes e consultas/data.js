
// MÉDICOS
let medicos = [
    {ID:1, nome:`João`, especialidade:`Pediatra`}
];

// PASCIENTES
let pascientes = [
    {ID:1, nome:`Cleitinho`, dataNascimento:`18/04/2007`}
];

// CONSULTAS
let consultas = [
    {ID:1, ID_medico:1, ID_pasciente:1, dataConsulta:`Segunda`, descricao:`Consulta urgente!`}
];

module.exports = {medicos,pascientes,consultas};