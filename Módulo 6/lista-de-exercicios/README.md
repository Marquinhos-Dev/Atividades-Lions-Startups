# Lista de Exercícios LionsDev

Clone este repositório em seu computador, e resolva os exercícios desta lista, e ao final, envie o arquivo resolucao.js na atividade do Google Classroom.

Esta lista será avaliativa, tendo parte do valor substitutivo juntamente ao trabalho apresentado em sala, então **capriche**!

> A data de entrega limite é **até o dia 11 de Julho**. Exercícios entregues após esta data não serão avaliados.

## Critérios de Avaliação
Caso algum dos critérios abaixo não seja atendido, a nota da lista será reduzida ou anulada.
* **Entrega do arquivo resolucao.js:** O arquivo foi entregue no  Classroom, e contém a resolução de todos os exercícios.
* **Indentação:** O código está devidamente indentado.
* **Nomenclatura de variáveis e funções:** As variáveis e funções estão com nomes descritivos.
* **Funcionalidade:** O código faz o que se propõe a fazer.
* **Comentários:** O código possui comentários explicando o que cada parte faz.

## Exercícios

1. Gerenciamento de consultas

    Vamos criar um sistema que irá gerenciar as consultas de uma clínica médica. Como requisitos, nós teremos as seguintes funcionalidades:

    * Adicionar uma nova consulta: Implemente uma função que adiciona uma nova consulta ao sistema. A consulta deve incluir o nome do paciente, o nome do médico, a data e a hora da consulta.
    Exemplo de Entrada:
        
        `adicionarConsulta("João", "Dr. Silva", "2024-06-01", "10:00")`

    * Listar todas as consultas: Descrição: Implemente uma função que lista todas as consultas agendadas no sistema.
        Exemplo de Saída:
        ```bash
        1. João - Dr. Silva - 2024-06-01 - 10:00
        2. Maria - Dra. Souza - 2024-06-02 - 11:00
        ```
    * Atualizar uma consulta existente: Implemente uma função que atualiza os detalhes de uma consulta existente. A função deve permitir a alteração de qualquer informação da consulta. Exemplo de Entrada:
    
        `atualizarConsulta(1, "João", "Dr. Silva", "2024-06-03", "09:00")`
    * Cancelar uma consulta: Implemente uma função que cancela uma consulta existente com base em seu índice. Exemplo de Entrada: 
    
        `cancelarConsulta(1)`

    Para facilitar a navegação e uso da aplicação de agendamento de consultas médicas, vamos implementar um menu interativo. O usuário irá interagir com o sistema digitando a opção numérica desejada.

    Menu de Opções

    ```bash
    Adicionar uma nova consulta
    Listar todas as consultas
    Atualizar uma consulta existente
    Cancelar uma consulta
    Sair
    ```

    Utilize o módulo prompt-sync para receber a entrada do usuário.

2. Desenvolvimento de Funcões

Desenvolva as seguintes funções:

    a. Implemente uma função que recebe um array de números inteiros e retorna a soma de todos os elementos do array.
    b. Implemente uma função que recebe um array de números inteiros e retorna a média dos elementos do array.
    c. Implemente uma função que recebe um array de números inteiros e retorna o maior elemento do array.
    d. Implemente uma função que recebe um array de números inteiros e retorna o menor elemento do array.
    e. Implemente uma função que recebe um array e retorne um novo array contendo apenas os valores únicos (sem os repetidos) do array original.
    f. Implemente uma função que recebe um array de de nomes e exibe uma saudação para cada nome no console.
    g. Implemente uma função que recebe uma string como parâmetro e retorne a string invertida. ex: "hello" a função retorna "olleh"
