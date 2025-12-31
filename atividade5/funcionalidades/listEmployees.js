const pause = require("../funcoes/pause")
function listEmployees(employees, prompt) {
    for (let i = 0; i < employees.length; i++) {
        console.log(`id: ${employees[i].id}, 
        nome: ${employees[i].name}, 
        cargo: ${employees[i].position}, 
        departamento: ${employees[i].department}, 
        salary: ${employees[i].salary}.`)
    }
    if (employees.length === 0) {
        console.log("Nenhum funcionário cadastrado.")
        pause(prompt)
        return
    }

    pause(prompt)
}
module.exports = listEmployees