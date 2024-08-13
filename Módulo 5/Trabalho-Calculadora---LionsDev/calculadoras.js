
const prompt = require('prompt-sync')({sigint: true})

menuInicial()

function menuInicial(){

    console.log(`
    |==========================================|
    |          Calculadora JavaScript          |
    |==========================================|
    | 1 - Iniciar                              |
    | 2 - Finalizar                            |
    |==========================================|
    `)

    let opcaoMenu = prompt(`--> Escolha uma opção: `)

    switch(opcaoMenu){
        case '1':
            inicioCalculadoraSimples()
        break
        case '2':
            console.log(`\n--> Saindo...`)
        break
        default:
            console.log(`\n--> Opção inválida!`)
            menuInicial()
        break
    }
}

function inicioCalculadoraSimples(){

    console.log()

    valor1 = parseFloat(prompt(`Digite o primeiro valor: `))
    valor2 = parseFloat(prompt(`Digite o segundo valor: `))
    operacao = prompt(`Escolha a operação desejada ('+','-','*','/','%'): `)

    calcularOperacao(inicioCalculadoraSimples,valor1,valor2,operacao)

    funcaoDeRetorno()
}

function calcularOperacao(retornarFuncao,fator1,fator2,operacao){

    if(isNaN(fator1) || isNaN(fator2)){

        console.log(`\n--> Digite valores numéricos válidos!`)

        retornarFuncao()
    } else{
        
        switch(operacao){
            case '+':
                resposta = fator1 + fator2
            break
            case '-':
                resposta = fator1 - fator2
            break
            case '*':
                resposta = fator1 * fator2
            break
            case '/':
                if(fator1 == 0 || fator2 == 0){

                    console.log(`\n--> Impossível dividir por 0!`)
                    retornarFuncao()

                } else{

                    resposta = fator1 / fator2
                }
            break
            case '%':
                resposta = (fator1 * fator2) / 100
            break
            default:
                console.log(`\n--> Digite uma operação válida!`)
                retornarFuncao()
            break
        }
    }
    console.log(`\n${fator1} ${operacao} ${fator2} = ${resposta}`)
}
function funcaoDeRetorno(){

    console.log(`
        1 - Continuar com o valor atual
        2 - Inserir novos valores
        3 - Encerrar
    `)
    
    opcaoRetorno = prompt(`--> Escolha uma opção:  `)
    
    switch(opcaoRetorno){
        case '1':
            funcaoContinuar()
        break
        case '2':
            inicioCalculadoraSimples()
        break
        case '3':
            console.log(`\n--> Saindo...`)
        break
        default:
            console.log(`\n--> Opção inválida!`)
            funcaoDeRetorno()
        break
    }
}
function funcaoContinuar(){

    console.log(`\nBaseado no valor anterior...\n`)

    valor1 = parseFloat(prompt(`Digite um novo valor: `))
    operacao = prompt(`Escolha a operação desejada ('+','-','*','/','%'): `)

    calcularOperacao(funcaoContinuar,resposta,valor1,operacao)

    funcaoDeRetorno()
}