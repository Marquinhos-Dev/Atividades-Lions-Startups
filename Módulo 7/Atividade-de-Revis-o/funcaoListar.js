
let array = require('./contatos')

function funcaoListar() {

  if(array.length == 0){
    console.log(`\n--> Ainda não há contatos registrados.`)
  } else{
    
    array.forEach(variavel => {
      console.log(`
      ID: ${variavel.ID}
      Nome: ${variavel.nome}
      Email: ${variavel.email}
      Telefones: `);
        variavel.telefones.forEach(telefone => {
          console.log(`                 ${telefone}`)
        });
    });
  }
}

module.exports = { funcaoListar }