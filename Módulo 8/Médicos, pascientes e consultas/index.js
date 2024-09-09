
// Express, palavra secreta e a porta do localhost
const express = require('express');
const app = express();
const port = 3000;

// Utilizar o JSON
app.use(express.json());

// CRUD MÉDICO
const criarMedico = require('./Médicos/criarMedico');
const listarMedicos = require('./Médicos/listarMedico');
const atualizarMedico = require('./Médicos/atualizarMedico');
const deletarMedico = require('./Médicos/deletarMedico');

// CRUD PASCIENTE
const criarPasciente = require('./Pascientes/criarPasciente');
const listarPascientes = require('./Pascientes/listarPascientes');
const atualizarPasciente = require('./Pascientes/atualizarPasciente');
const deletarPasciente = require('./Pascientes/deletarPasciente');

// CRUD CONSULTA
const criarConsulta = require('./Consultas/criarConsulta');
const listarConsultas = require('./Consultas/listarConsultas');
const atualizarConsulta = require('./Consultas/atualizarConsulta');
const deletarConsulta = require('./Consultas/deletarConsulta');

// BUSCAR MÉDICO
const buscarMedicoPorEspecialidade = require('./Médicos/buscarMedicoPorEspecialidade');
const buscarMedicoPorNome = require('./Médicos/buscarMedicoPorNome');

// BUSCAR PASCIENTE
const buscarPascientePorNascimento = require('./Pascientes/buscarPascientePorNascimento');
const buscarPascientePorNome = require('./Pascientes/buscarPascientePorNome');

// BUSCAR CONSULTA
const buscarConsultaPorMedico = require('./Consultas/buscarConsultaPorMedico');
const buscarConsultaPorPasciente = require('./Consultas/buscarConsultaPorPasciente');

// ROTAS DE CRUD MÉDICO
app.post('/medico',criarMedico);
app.get('/medico',listarMedicos);
app.put('/medico/id:',atualizarMedico);
app.delete('medico/id:',deletarMedico);

// ROTAS DE CRUD PACIENTE
app.post('/pasciente',criarPasciente);
app.get('/paciente',listarPascientes);
app.put('/paciente/id:',atualizarPasciente);
app.delete('paciente/id:',deletarPasciente);

// ROTAS DE CRUD CONSULTA
app.post('/consulta',criarConsulta);
app.get('/consulta',listarConsultas);
app.put('/consulta/id:',atualizarConsulta);
app.delete('/consulta/id:',deletarConsulta);

// ROTAS DE BUSCA MÉDICO
app.get('/medico/especialidade',buscarMedicoPorEspecialidade);
app.get('/medico/nome',buscarMedicoPorNome);

// ROTAS DE BUSCA PASCIENTE
app.get('/paciente/nome',buscarPascientePorNome);
app.get('/paciente/nascimento',buscarPascientePorNascimento);

// ROTAS DE BUSCA CONSULTA
app.get('/consulta/medico',buscarConsultaPorMedico);
app.get('/consulta/paciente',buscarConsultaPorPasciente);

// Inicializando o servidor
app.listen(port,()=>{
    console.log(`Código rodando em localhost:${port}/`);
});

// Página não encontrada
app.use((req,res)=>{
    res.status(404).send({message:`Página não encontrada!`});
});
