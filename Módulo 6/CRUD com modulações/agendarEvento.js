function agendarEvento(Eventos,rl,callback) {

    rl.question('Qual o nome do evento? ',(nome)=>{
        rl.question('Qual artista estará presente? ',(artista)=>{
            rl.question('Qual a data do evento? ',(data)=>{
                rl.question('Qual o horario do evento? ',(horario)=>{

                    console.log()

                    Eventos.push({nome:nome,artista:artista,data:data,horario:horario,ingressos:[]})

                    console.log(`--> Evento agendado com sucesso!`)

                    callback()
    })})})})
}

module.exports = {agendarEvento}