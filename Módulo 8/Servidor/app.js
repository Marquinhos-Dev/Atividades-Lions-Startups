
// Importação do express, porta e palavra chave
const express = require('express');
const app = express();
const port = 3000;
const palavra = 'Jesus';

// Verificação de palavra secreta
app.use((req,res,next)=>{
    console.log(req.headers['palavra-secreta']);
    if(req.headers['palavra-secreta']!= palavra){
        res.status(403).send(`Erro! Palavra secreta incorreta!`);
        throw new Error('Usuário não enviou a palavra secreta');
    } else{
        next();
    }
})

app.get('/',(req,res) =>{
    res.send('Helo Word!');
})

app.get('/sobre',(req,res) =>{
    res.send(`Estamos aprendendo a usar o 'Thunder Client' e o comando 'node --watch [nome_arquivo]'.`);
})

app.listen(port,()=>{
    console.log(`Código rodando em localhost:${port}/`);
})

// Páginas 'sem rotas'
app.use((req,res)=>{
    res.status(404).send(`Página não encontrada.`)
})