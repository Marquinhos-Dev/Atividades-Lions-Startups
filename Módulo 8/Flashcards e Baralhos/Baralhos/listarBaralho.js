
let {baralhos} = require('../data');

function listarBaralhos(req,res){

    res.status(200).send(baralhos);
};

module.exports = listarBaralhos;