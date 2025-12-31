const prompt = require("prompt-sync")()
const promptText = require("./funcoes/inputText")
const addEmployee = require("./funcionalidades/addEmployee")
const listEmployees = require("./funcionalidades/listEmployees")
const attEmployee = require("./funcionalidades/attEmployee")
const delEmployee = require("./funcionalidades/delEmployee")
const searchEmployee = require("./funcionalidades/searchEmployee")
const quit = require("./funcionalidades/quit")
const pause = require("./funcoes/pause")

let employees = [
    {id: 1, name: "Robervaldo Junior", position: "Repositor", department: "Alimentos", salary: 900},
    {id: 2, name: "Rayan Santos", position: "Repositor", department: "Limpeza", salary: 900},
    {id: 3, name: "Robson Crusoé", position: "Caixa", department: "Caixa", salary: 1000}
]

function programa() {
    while (true) {
        console.clear()
        console.log("Bem vindo ao gerênciamento de funcionários!")
        console.log(`
        1 - Adicionar funcionário
        2 - Listar funcionários
        3 - Atualizar funcionário
        4 - Deletar funcionário
        5 - Buscar funcionário
        6 - sair`)
        let decisao = promptText(prompt, "Digite a sua decisão: ")

        switch (decisao) {
            case '1':
                addEmployee(employees)
                pause(prompt)
                break
            case '2':
                listEmployees(employees, prompt)
                break
            case '3':
                attEmployee(employees)
                pause(prompt)
                break
            case '4':
                delEmployee(employees)
                pause(prompt)
                break
            case '5':
                searchEmployee(employees, prompt)
                break
            case '6':
                quit()
                return
            default:
                console.log("Opção inválida!")
                pause(prompt)
        }
    }
}
programa()
module.exports = employees