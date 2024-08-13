
let nome
let idade

console.log(`|==================================|`)
console.log(`|Chamada para o Exército Brasileiro|`)
console.log(`|==================================|`)
console.log(`|Olá! Qual seu nome?               |`)
console.log(`|==================================|`)
console.log(``)

process.stdin.once('data', function(data){

    nome = data.toString().trim()

    console.log(``)
    console.log(`|===============================|`)
    console.log(`|${nome}, quantos anos você tem?|`)
    console.log(`|===============================|`)
    console.log(``)

    process.stdin.once('data', function(data){

        idade = parseInt(data.toString().trim())

        resposta()

        process.exit()
    })
})

function resposta(){

    if(idade>=18){

        console.log(``)
        console.log(`|========================================`)
        console.log(`|${nome}, o exército brasileiro te chama!`)
        console.log(`|========================================`)
        console.log(``)
        
    } else{

        console.log(``)
        console.log(`|===================================================================`)
        console.log(`|${nome}, o exército brasileiro te aguarda em ${18-idade} ano(s).`)
        console.log(`|===================================================================`)
        console.log(``)
    }
}

