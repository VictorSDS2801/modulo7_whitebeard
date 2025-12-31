const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes/inputNumber")
const idexiste = require("../funcoes/idexiste")
const buscarposicao = require("../funcoes/buscarposicao")
const printEmployee = require("../funcoes/printEmployee")

function delEmployee(employees) {
    while (true) {
        console.clear()
        let id = promptNumber(prompt, "Digite o id do funcionário que você deseja deletar: ")
        if (!idexiste(employees, id)) {
            console.log("Digite um id existente!")
            continue
        }
        
        const posicao = buscarposicao(employees, id)
        const employee = employees[posicao]

        printEmployee(employee)

        const confirm = prompt("Tem certeza que deseja deletar? (s/n): ").toLowerCase()

        if (confirm !== "s") {
            console.log("Operação cancelada.")
            return
        }

        employees.splice(posicao, 1)
        console.log("Funcionário deletado com sucesso!")
        return
    }
}
module.exports = delEmployee