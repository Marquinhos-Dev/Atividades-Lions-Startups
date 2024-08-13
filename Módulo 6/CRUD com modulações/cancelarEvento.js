function cancelarEvento(Eventos,rl,callback){

    Eventos.forEach((evento, i) =>{
        console.log(`${i+1}º Evento: ${Eventos[i].nome}`)
    })

    rl.question('Deseja cancelar qual evento?' ,(evento)=>{

        console.log('\n')

        evento = parseInt(evento)

        if(typeof(evento) === 'number' && evento > 0 && evento <= Eventos.length){

            Eventos.splice(evento - 1,1)

            console.log('--> Evento cancelado com sucesso! Todos os ingressos foram removidos!')

            callback()

        } else{

            console.log(`Opção inválida.`)

            cancelarEvento()
        }
    })
}

module.exports = {cancelarEvento}