
let valorInicial
let temperaturaInicial
let temperaturaFinal
let Celcius = 0
let Kelvin = 0
let Fahrenheit = 0

console.log(`Me dê uma temperatura inicial (apenas números):`)

process.stdin.once('data',function(data){

    valorInicial = parseFloat(data.toString().trim())

    console.log(`Me diga a unidade de temperatura utilizada:`)

    process.stdin.once('data',function(data){

        temperaturaInicial = data.toString().trim()

        conversaoTemperatura()

        process.exit()
    })
})

function conversaoTemperatura(){

    switch (temperaturaInicial){
        case 'Celcius':
        case 'CELCIUS':
        case 'celcius':
            Celcius = valorInicial
            break
        case 'Kelvin':
        case 'kelvin':
        case 'KELVIN':
            Kelvin = valorInicial
            break
        case 'Fahrenheit':
        case 'fahrenheit':
        case 'FAHRENHEIT':
            Fahrenheit = valorInicial
            break
    }
    
    if(Celcius != 0){

        Kelvin = Celcius + 273.15

        Fahrenheit = 9/5 * Celcius + 32

    } else if(Kelvin != 0){

        Celcius = Kelvin - 273.15

        Fahrenheit = 9/5 * (Kelvin - 273.15)+ 32

    } else if(Fahrenheit != 0){

        Celcius = 5/9 * (Fahrenheit - 32)

        Kelvin = 5/9 * (Fahrenheit - 32) + 273.15

    }

    console.log(`${Celcius}º Celcius`)
    console.log(`${Fahrenheit}º Fahrenheit`)
    console.log(`${Kelvin} Kelvin`)
}