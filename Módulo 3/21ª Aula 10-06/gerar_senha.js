
let caracteres = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']

let senha
let valor
let tamanho
let temMaiuscula
let temMinuscula
let temNumero

console.log(`Quer gerar uma senha de quantos dígitos?`)

process.stdin.once('data',function(data){

    tamanho = parseInt(data.toString().trim())

    verificarSenha()

    console.log(senha)

    process.exit()
})

function verificarSenha(){

    do{
        senha = ''

        for(i = 0; i < tamanho; i++){

            valor = Math.floor(Math.random()* caracteres.length)
    
            senha += caracteres[valor]
        }
        
        temMinuscula = /[a-z]/.test(senha)
        temMaiuscula = /[A-Z]/.test(senha)
        temNumero = /[0-9]/.test(senha)

    } while(temNumero == false || temMaiuscula == false || temMinuscula == false)
}

