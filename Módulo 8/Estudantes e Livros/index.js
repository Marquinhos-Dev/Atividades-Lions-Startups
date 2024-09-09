
// Express, palavra secreta e a porta do localhost
const express = require('express');
const app = express();
const port = 3000;

// Utilizar o JSON
app.use(express.json());

// CRUD LIVROS
const criarLivro = require('./Livros/criarLivro');
const listarLivros = require('./Livros/listarLivros');
const atualizarLivro = require('./Livros/atualizarLivro');
const deletarLivro = require('./Livros/deletarLivro');

// CRUD ESTUDANTE
const criarEstudante = require('./Estudantes/criarEstudante');
const listarEstudantes = require('./Estudantes/listarEstudante');
const atualizarEstudante = require('./Estudantes/atualizarEstudante');
const deletarEstudante = require('./Estudantes/deletarEstudante');

// CRUD ALUGUEL
const criarAluguel = require('./Aluguel/criarAluguel');
const listarAlugueis = require('./Aluguel/listarAluguel');
const atualizarAluguel = require('./Aluguel/atualizarAluguel');
const deletarAluguel = require('./Aluguel/deletarAluguel');

// BUSCAR ALUGUEL
const bucarAluguelPorDevolucao = require('./Aluguel/buscarAluguelPorDevolucao');
const bucarAluguelPorEmprestimo = require('./Aluguel/buscarAluguelPorEmprestimo');
const buscarAluguelPorEstudante = require('./Aluguel/buscarAluguelPorEstudante');
const buscarAluguelPorLivro = require('./Aluguel/buscarAluguelPorLivro');

// BUSCAR LIVRO
const buscarLivroPorAno = require('./Livros/buscarLivroPorAno');
const buscarLivroPorAutor = require('./Livros/buscarLivroPorAutor');
const buscarLivroPorGenero = require('./Livros/buscarLivroPorGenero');
const buscarLivroPorTitulo = require('./Livros/buscarLivroPorTitulo');

// BUSCAR ESTUDANTE
const buscarEstudantePorCurso = require('./Estudantes/buscarEstudantePorCurso');
const buscarEstudantePorMatricula = require('./Estudantes/buscarEstudantePorMatricula');
const buscarEstudantePorNome = require('./Estudantes/buscarEstudantePorNome');

// ROTAS DE CRUD ALUGUEL
app.post('/aluguel',criarAluguel);
app.get('/aluguel',listarAlugueis);
app.put('/aluguel/:id',atualizarAluguel);
app.delete('/aluguel/:id',deletarAluguel);

// ROTAS DE CRUD LIVRO
app.post('/livro',criarLivro);
app.get('/livro',listarLivros);
app.put('/livro/:id',atualizarLivro);
app.delete('/livro/:id',deletarLivro);

// ROTAS DE CRUD ESTUDANTE
app.post('/estudante',criarEstudante);
app.get('/estudante',listarEstudantes);
app.put('/estudante/:id',atualizarEstudante);
app.delete('/estudante/:id',deletarEstudante);

// ROTAS DE BUSCA ALUGUEL
app.get('/aluguel/buscar-por-devolucao',bucarAluguelPorDevolucao);
app.get('/aluguel/buscar-por-emprestimo',bucarAluguelPorEmprestimo);
app.get('/aluguel/buscar-por-estudante',buscarAluguelPorEstudante);
app.get('/aluguel/buscar-por-livro',buscarAluguelPorLivro);

// ROTAS DE BUSCA LIVRO
app.get('/livro/buscar-por-ano',buscarLivroPorAno);
app.get('/livro/buscar-por-autor',buscarLivroPorAutor);
app.get('/livro/buscar-por-genero',buscarLivroPorGenero);
app.get('/livro/buscar-por-titulo',buscarLivroPorTitulo);

// ROTAS DE BUSCA ESTUDANTE
app.get('/estudante/buscar-por-curso',buscarEstudantePorCurso);
app.get('/estudante/buscar-por-matricula',buscarEstudantePorMatricula);
app.get('/estudante/buscar-por-nome',buscarEstudantePorNome);

// Inicializando o servidor
app.listen(port,()=>{
    console.log(`Código rodando em localhost:${port}/`);
});

// Página não encontrada
app.use((req,res)=>{
    res.status(404).send({message:`Página não encontrada!`});
});
