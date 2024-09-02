
// Express, palavra secreta e a porta do localhost
const express = require('express');
const app = express();
const port = 3000;

// Utilizar o JSON
app.use(express.json());

// Funções Baralhos e Flashcards
const criarBaralho = require('./Baralhos/criarBaralho');
const editarBaralho = require('./Baralhos/editarBaralho');
const listarBaralhos = require('./Baralhos/listarBaralho');
const deletarBaralho = require('./Baralhos/deletarBaralho');
const criarFlashcard = require('./Flashcards/criarFlashcard');
const listarTodosFlashcard = require('./Flashcards/listarTodosFlashcard');
const listarFlashcardPorBaralho = require('./Flashcards/listarFlashcardPorBaralho');
const buscarFlashcardPorPergunta = require('./Flashcards/buscarFlashcardPorPergunta');
const buscarFlashcardPorID = require('./Flashcards/buscarFlashcardPorId');
const editarFlashcard = require('./Flashcards/editarFlashcard');
const deletarFlashcard = require('./Flashcards/deletarFlashcard');

// Página inicial
app.get('/',(req,res)=>{
    res.send(`Baralhos e Flashcards!`);
});

// Baralhos
app.post('/Baralhos',criarBaralho);
app.get('/Baralhos',listarBaralhos);
app.put('/Baralhos/:ID',editarBaralho);
app.delete('/Baralhos/:ID',deletarBaralho);

// Flashcards
app.post('/Flashcards',criarFlashcard);
app.get('/Flashcards',listarTodosFlashcard);
app.get('/Flashcards/ID_Baralho/:ID',listarFlashcardPorBaralho);
app.get('/Flashcards/pergunta/:ID',buscarFlashcardPorPergunta);
app.get('/Flashcards/ID/:ID',buscarFlashcardPorID);
app.put('/Flashcards/:ID',editarFlashcard);
app.delete('/Flashcards/:ID',deletarFlashcard);

// Inicializando o servidor
app.listen(port,()=>{
    console.log(`Código rodando em localhost:${port}/`);
});

// Página não encontrada
app.use((req,res)=>{
    res.status(404).send({message:`Página não encontrada!`});
});