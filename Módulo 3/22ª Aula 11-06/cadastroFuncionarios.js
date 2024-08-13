
// Inicializa a biblioteza ReadLine
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// Declara um array de objetos para os funcionários
let funcionarios = [
    {nome: 'Marcos', cargo: 'Dev', salario: 15000}
]

exibirMenu()

// Função que exube a Tela Inicial
function exibirMenu() {
	
    console.log()
    console.log(`|============================================|`)
    console.log(`|                Menu inicial                |`)
    console.log(`|============================================|`)
    console.log(`|1 - Cadastrar funcionário                   |`)
    console.log(`|2 - Listar todos os funcionários            |`)
    console.log(`|3 - Exibir funcionário com maior salário    |`)
    console.log(`|4 - Sair                                    |`)
    console.log(`|============================================|`)
    console.log()

	rl.question('--> Escolha uma opção: ', (opcao) => {

        console.log()

        // Executa cada função da tela inicial
		switch (opcao) {
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

        console.log(`Nenhum funcionário cadastrado.`)

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

        console.log(`Nenhum funcionário cadastrado.`)

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

