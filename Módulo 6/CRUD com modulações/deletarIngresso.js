function deletarIngresso(Eventos,rl,callback){

    Eventos.forEach((evento, i) =>{
        console.log(`${i+1}º Evento: ${Eventos[i].nome}`)
    })

    console.log()

    rl.question(`Quer deletar o ingresso de qual evento? `,(evento)=>{

        console.log()

        evento = parseInt(evento)

        if(typeof(evento) === 'number' && evento > 0 && evento <= Eventos.length){

            Eventos[evento - 1].ingressos.forEach((ingresso,i)=>{
                console.log(`${i + 1} - ${ingresso.nomeUtilizador}, ${ingresso.idadeUtilizador}`)
            })

            console.log()

            rl.question(`Quer deletar qual ingresso? `,(ingresso)=>{

                console.log()

                ingresso = parseInt(ingresso)

                if(typeof(ingresso) === 'number' && ingresso > 0 && ingresso <= Eventos[evento - 1].ingressos.length){

                    Eventos[evento - 1].ingressos.splice(ingresso - 1,1)

                    console.log(`--> Ingresso deletado com sucesso!`)

                    callback()

                } else{

                    console.log(`Opção inválida.`)
        
                    deletarIngresso()
                }
            })

        } else{

            console.log(`Opção inválida.`)

            deletarIngresso()
        }
    })
}

module.exports = {deletarIngresso}