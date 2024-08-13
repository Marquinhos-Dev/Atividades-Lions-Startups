
// Inicializa a biblioteza ReadLine
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// Declara um array de objetos para os funcionários
let funcionarios = [
    {nome: 'Marcos', cargo: 'Dev', salario: 15000},
    {nome: 'João', cargo: 'Professor', salario: 6000},
    {nome: 'Cleiton', cargo: 'Pedreiro', salario: 8000}
]

exibirMenu()

// Função que exube a Tela Inicial
function exibirMenu() {
	
    console.log(`
        |============================================|
        |                Menu inicial                |
        |============================================|
        |1 - Cadastrar funcionário                   |
        |2 - Listar todos os funcionários            |
        |3 - Exibir funcionário com maior salário    |
        |4 - Editar informações de um funcionário    |
        |5 - Excluir funcionário                     |
        |6 - Sair                                    |
        |============================================|
    `)

	rl.question('--> Escolha uma opção: ', (opcao) => {

        console.log()

        // Executa cada função da tela inicial
		switch(opcao){
			case '1':
				cadastrarFuncionario()
			break
			case '2':
				exibirFuncionarios()
			break
            case '3':
                exibirMaiorSalario()
            break
            case '4':
                editarInformações()
            break
            case '5':
                excluirFuncionario()
            break
            case '6':
                rl.close()
            break
			default:
				console.log('Opção inválida, tente novamente.')
                console.log()

				exibirMenu()
			break
		}
	})
}

// Função para cadastrar um novo funcionário
function cadastrarFuncionario() {
	rl.question('--> Digite o nome do funcionário: ', (nome) => {
		rl.question('--> Digite o cargo do funcionário: ', (cargo) => {
			rl.question('--> Digite o salário do funcionário: ', (salario) => {

				funcionarios.push({ nome: nome, cargo: cargo, salario: parseInt(salario) })
                
                console.log()
				console.log('Funcionário cadastrado com sucesso!')
                console.log()

				voltarAoMenuPrinpipal()
			})
		})
	})
}

// Função para exibir todos os funcionários
function exibirFuncionarios(){

    if(funcionarios.length === 0){

        console.log(`--> Nenhum funcionário cadastrado.`)
        console.log()

    } else{

        for(let i = 0; i < funcionarios.length; i++){

            console.log(`${i+1}º funcionário: ${funcionarios[i].nome}; cargo: ${funcionarios[i].cargo}; salário: ${funcionarios[i].salario}:`)
        }
    }
    console.log()

    voltarAoMenuPrinpipal()
}

// Função para exibir o funcionário com maior salário
function exibirMaiorSalario(){

    if(funcionarios.length === 0){

        console.log(`--> Nenhum funcionário cadastrado.`)
        console.log()

        voltarAoMenuPrinpipal()

    } else{

        // Inicializa os dados do funcionário com maior salário
        let funcionariosComMesmoSalario = []
        let maiorSalario = funcionarios[0].salario

        // Verifica qual é, e quem tem o maior salário
        for(let i = 0; i < funcionarios.length; i++){

            if(funcionarios[i].salario > maiorSalario){

                maiorSalario = funcionarios[i].salario
            }
        }

        // Verifica se há mais funcionários com o mesmo salário
        for(let i = 0; i < funcionarios.length; i++){

            if(maiorSalario == funcionarios[i].salario){

                funcionariosComMesmoSalario.push(funcionarios[i])
            }
        }

        if(funcionariosComMesmoSalario.length > 1){

            console.log(`Os funcioinários com os maiores salários são:`)

        } else{

            console.log(`O funcionário com o maior salário é:`)
        }
        console.log()

        for(let i = 0; i < funcionariosComMesmoSalario.length; i++){

            console.log(`--> ${funcionariosComMesmoSalario[i].nome}, que ganha ${funcionariosComMesmoSalario[i].salario} reais.`)
        }
    }
    console.log()

    voltarAoMenuPrinpipal()
}

function voltarAoMenuPrinpipal(){

    rl.question('Pressione ENTER para voltar ao menu', (line) =>{
        exibirMenu()
    })
}

function editarInformações(){

    if(funcionarios.length === 0){

        console.log(`--> Nenhum funcionário cadastrado.`)
        console.log()

        voltarAoMenuPrinpipal()

    } else{

        rl.question('Quer editar as informações de qual funcionário? (número): ',(valor) =>{

            valor = parseInt(valor)

            console.log()

            if(typeof(valor) === 'number' && valor >= 0 && valor - 1 <= funcionarios.length){

                rl.question('Digite o novo nome: ',(nome)=>{
                rl.question('Digite o novo cargo: ', (cargo)=>{
                rl.question('Digite o novo salário: ', (salario)=>{
    
                    funcionarios[valor - 1] = {nome: nome, cargo: cargo, salario: salario}
    
                    console.log()
                    console.log(`Informações alteradas com successo!`)
                    console.log()
        
                    voltarAoMenuPrinpipal()
                })
                })
                })

            } else{

                console.log('--> Opção inválida, tente novamente.')
                console.log()

				editarInformações()
            }
        })            
    }
}

function excluirFuncionario(){

    if(funcionarios.length === 0){

        console.log(`--> Nenhum funcionário cadastrado.`)
        console.log()

        voltarAoMenuPrinpipal()

    } else{

        rl.question('Quer excluir qual funcionário? (número): ',(valor) =>{

            valor = parseInt(valor)

            console.log()

            if(typeof(valor) === 'number' && valor >= 0 && valor - 1 <= funcionarios.length){

                funcionarios.splice(valor - 1,1)

                console.log(`Funcionário excluído com sucesso!`)
                console.log()
            } else{

                console.log('--> Opção inválida, tente novamente.')
                console.log()

				excluirFuncionario()
            }
            voltarAoMenuPrinpipal()
        })
    }
}
