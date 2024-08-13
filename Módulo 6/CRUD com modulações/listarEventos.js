function listarEventos(Eventos,rl,callback){

    if (Eventos.length == 0){

        console.log(`--> Ainda não há eventos agendados!`)

    } else{

        Eventos.forEach((evento, i) =>{
            console.log(`${i+1}º Evento: ${Eventos[i].nome}`)
        })
    }
    callback()
}

module.exports = {listarEventos}