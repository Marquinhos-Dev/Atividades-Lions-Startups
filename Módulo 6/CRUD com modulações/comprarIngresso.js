function comprarIngresso(Eventos,rl,callback){

    if (Eventos.length > 0){

        rl.question('Nome do utilizador: ',(nome)=>{
        rl.question('Idade atual: ',(idade)=>{

            console.log()

        Eventos.forEach((evento, i) =>{
            console.log(`${i+1}º Evento: ${Eventos[i].nome}`)
        })

            console.log()

        rl.question('Deseja comprar ingresso para qual evento?(número) ',(evento)=>{
        rl.question('Deseja adquirir qual tipo de ingresso?(Padrão ou VIP) ',(tipoIngresso)=>{

            console.log()

        evento = parseInt(evento)

        if(typeof(evento) === 'number' && evento > 0 && evento <= Eventos.length){

            Eventos[evento -1].ingressos.push({nomeUtilizador:nome,idadeUtilizador:idade,tipoDeIngresso:tipoIngresso})

            console.log(`--> Ingresso confirmado!`)

            callback()

        } else{

            console.log(`--> Erro.`)

            comprarIngresso()
        }

        })})})})

    } else{

        console.log(`--> Ainda não há eventos agendados!`)

        callback()
    }
}

module.exports = {comprarIngresso}