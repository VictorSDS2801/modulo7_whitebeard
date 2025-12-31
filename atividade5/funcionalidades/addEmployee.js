const prompt = require("prompt-sync")()
const promptText = require("../funcoes/inputText")
const promptNumber = require("../funcoes/inputNumber")
const createid = require("../funcoes/createid")


function addEmployee(employees) {
    while (true) {
        console.clear()
        let id = createid(employees)

        let name = promptText(prompt, "Digite o nome do funcionário: ")
        let position = promptText(prompt, "Digite o cargo do funcionário: ") 
        let department = promptText(prompt, "Digite o departamento do funcionário: ")
        let salary = promptNumber(prompt, "Digite o salário do funcionário: ")
        if (salary < 100) {
            console.log("Digite um salário válido!")
            continue
        }
        
        employees.push({id: id, name: name, position: position, department: department, salary: salary})
        console.log("Funcionário adicionado com sucesso!")
        return 
        
    }
}
module.exports = addEmployee