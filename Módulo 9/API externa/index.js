
const Axios = require('axios');
const Express = require('express');
const app = Express();
const porta = 3000;
const API_KEY = require('./personalKeyAPI');

app.get('/clima/:cidade',async(req,res)=>{
    try{
        const {cidade} = req.params;
        const resposta = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
        res.json(resposta.data);
    } catch(error){
        res.status(500).send(error);
    };
});

app.listen(porta,()=>{console.log(`Servidor rodando em: http://localhost:${porta}`)})