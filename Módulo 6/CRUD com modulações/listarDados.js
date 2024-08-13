function listarDadosDeEventos(Eventos,rl,callback){

    if (Eventos.length == 0){

        console.log(`--> Ainda não há eventos agendados!`)

    } else{

        Eventos.forEach((evento,i)=>{

            console.log(`${Eventos[i].nome} - ${Eventos[i].artista}, ${Eventos[i].data}, ${Eventos[i].horario}`)
        })
    }
    callback()
}

module.exports = {listarDadosDeEventos}