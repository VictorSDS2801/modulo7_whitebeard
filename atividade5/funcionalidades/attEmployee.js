const prompt = require("prompt-sync")()
const buscarposicao = require("../funcoes/buscarposicao")
const idexiste = require("../funcoes/idexiste")
const printEmployee = require("../funcoes/printEmployee")

function attEmployee(employees) {
    while (true) {
        console.clear()

        let id = Number(prompt("Digite o id do funcionário que você deseja atualizar: "))
        if (!idexiste(employees, id)) {
            console.log("Digite um id existente!")
            continue
        }

        const posicao = buscarposicao(employees, id)
        const employee = employees[posicao]

        console.log("Funcionário atual:")
        printEmployee(employee)
        console.log("\n(Pressione ENTER para manter o valor atual)\n")

        let newname = prompt(`Novo nome (${employee.name}): `)
        if (newname === "") newname = employee.name

        let newposition = prompt(`Novo cargo (${employee.position}): `)
        if (newposition === "") newposition = employee.position

        let newdepartment = prompt(`Novo departamento (${employee.department}): `)
        if (newdepartment === "") newdepartment = employee.department

        let salaryInput = prompt(`Novo salário (${employee.salary}): `)
        let newsalary

        if (salaryInput === "") {
            newsalary = employee.salary
        } else {
            newsalary = Number(salaryInput)
            if (isNaN(newsalary) || newsalary < 100) {
                console.log("Digite um salário válido!")
                continue
            }
        }

        const confirm = prompt("Tem certeza que deseja atualizar? (s/n): ").toLowerCase()
        if (confirm !== "s") {
            console.log("Operação cancelada.")
            return
        }

        employees[posicao] = {
            ...employee,
            name: newname,
            position: newposition,
            department: newdepartment,
            salary: newsalary
        }

        console.log("Funcionário atualizado com sucesso!")
        return
    }
}

module.exports = attEmployee
