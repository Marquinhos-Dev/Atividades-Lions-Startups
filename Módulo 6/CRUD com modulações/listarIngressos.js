function listarIngressosDeEvento(Eventos,rl,callback){

    if(Eventos.length > 0){

        Eventos.forEach((evento, i) =>{
            console.log(`${i+1}º Evento: ${Eventos[i].nome}`)
        })

        console.log()

        rl.question(`Quer vizualizar os ingressos de qual evento? `,(evento)=>{

            console.log()

            evento = parseInt(evento)

            if(typeof(evento) === 'number' && evento > 0 && evento <= Eventos.length){

                if(Eventos[evento - 1].ingressos.length > 0){

                    Eventos[evento - 1].ingressos.forEach((ingresso,i)=>{

                        console.log(`${ingresso.nomeUtilizador}, ${ingresso.idadeUtilizador}`)
                    })
                } else{

                    console.log(`Não há ingressos para esse evento!`)
                }
                callback()

            } else{

                console.log(`Opção inválida.`)

                listarIngressosDeEvento()
            }
        })
    } else{

        console.log(`--> Ainda não há eventos agendados!`)

        callback()
    }
}

module.exports = {listarIngressosDeEvento}