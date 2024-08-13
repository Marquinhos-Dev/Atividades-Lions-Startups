
const readline = require('readline')
const { brotliCompress } = require('zlib')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let Musicas = [{
        nome: 'Mais Alto',
        banda: 'Oficina G3',
        album: 'Além do que os olhos podem ver',
        ano: 2003
    }]

exibirMenu()

function exibirMenu(){

    console.log()
    console.log(`|==========================================|`)
    console.log(`|               Menu Inicial               |`)
    console.log(`|==========================================|`)
    console.log(`| 1 - Cadastrar nova música                |`)
    console.log(`| 2 - Listar todas as músicas              |`)
    console.log(`| 3 - Editar informações de uma música     |`)
    console.log(`| 4 - Excluir música da lista              |`)
    console.log(`| 5 - Encerrar programa                    |`)
    console.log(`|==========================================|`)
    console.log()

    rl.question(`--> Escolha uma opção: `,(opcao)=>{

        opcao = parseInt(opcao)

        switch(opcao){
            case 1:
                cadastrarMusica()
            break
            case 2:
                listarMusicas()
            break
            case 3:
                editarInfoMusica()
            break
            case 4:
                excluirMusica()
            break
            case 5:
                rl.close()
            break
            default:
                console.log()
                console.log(`--> Opção inválida`)

                voltarAoMenuPrincipal()
            break
        }
    })
}

function cadastrarMusica(){

    rl.question(`Qual o nome da música? `,(nome)=>{
    rl.question(`Ela foi lançada por qual banda? `,(banda)=>{
    rl.question(`Ela pertence a qual álbum da banda? `,(album)=>{
    rl.question(`Em que ano ela foi lançada? `,(ano)=>{

        Musicas.push({nome:nome,
                      banda:banda,
                      album:album,
                      ano:parseInt(ano)})
        
        console.log()
        console.log(`--> Música adicionada com sucesso!`)
        
        voltarAoMenuPrincipal()
                })
            })
        })
    })
}

function listarMusicas(){

    console.log()

    for(let i = 0; i < Musicas.length; i++){

        console.log(`A ${i+1}ª música é "${Musicas[i].nome}" da banda "${Musicas[i].banda}", pertencente ao álbum "${Musicas[i].album}", lançado em ${Musicas[i].ano}.`)
    }
    voltarAoMenuPrincipal()

}

function editarInfoMusica(){

    console.log()
    
    rl.question(`Quer editar as informações de qual música? `,(line)=>{

        line = parseInt(line)

        console.log()

        if(typeof(line) === 'number' && line > 0 && line <= Musicas.length){

            rl.question(`Qual o novo nome da música? `,(nome)=>{
            rl.question(`Qual a banda da nova música? `,(banda)=>{
            rl.question(`Qual o álbum da nova música? `,(album)=>{
            rl.question(`Em que ano ela foi lançada? `,(ano)=>{
        
                Musicas[line-1] = {nome:nome,banda:banda,album:album,ano:parseInt(ano)}

                console.log()
                console.log(`--> Informações editadas com sucesso!`)

                voltarAoMenuPrincipal()

                        })
                    })
                })
            })

        } else{

            console.log()
            console.log(`--> Opção inválida`)

            editarInfoMusica()
        }
        console.log()
    })
}

function excluirMusica(){

    console.log()

    rl.question(`Deseja excluir qual música da lista?`,(line)=>{

        line = parseInt(line)

        if(typeof(line) === 'number' && line > 0 && line <= Musicas.length){

            Musicas.splice(line - 1,1)

            console.log()
            console.log(`--> Música excluída com sucesso!`)

            voltarAoMenuPrincipal()

        } else{

            console.log()
            console.log(`--> Opção inválida`)

            excluirMusica()
        }
    })
}

function voltarAoMenuPrincipal(){

    console.log()

    rl.question(`Pressione ENTER para voltar ao menu:`,(voltar)=>{

        exibirMenu()
    })
}