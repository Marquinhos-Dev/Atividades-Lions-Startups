
let nome
let coresFavoritas = ['preto', 'azul', 'verde']
let coresEspeciais = []
let corDoUsuario

console.log()
console.log(`--> Olá, qual seu nome?`)
console.log()

process.stdin.once('data', function(data){

    nome = data.toString().trim()

    console.log()
    console.log(`--> ${nome}, qual sua cor favorita?`)
    console.log()

    process.stdin.once('data', function(data){

        corDoUsuario = data.toString().trim()

        funcaoResposta()

        process.exit()
    })
})

function funcaoResposta(){

    if(coresFavoritas.includes(corDoUsuario)){


        console.log()
        console.log(`--> ${nome}, sua cor é uma das favoritas da turma!`)
    
    } else{

        console.log()
        console.log(`--> ${nome}, sua cor é diferente das favoritas, vamos adicioná-la à lista!`)

        coresEspeciais.push(corDoUsuario)
    }

    console.log(`--> No total, há ${coresFavoritas.length} cores favoritas entre a turma! São elas: ${coresFavoritas}, mas acabamos de incluir ${coresEspeciais} a elas!`)
    console.log()
}

