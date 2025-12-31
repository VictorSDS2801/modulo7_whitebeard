const prompt = require("prompt-sync")()
const promptText = require("../funcoes/inputText")

function searchEmployee(employees) {
    while (true) {
        console.clear()
        let chave = promptText(prompt, "Digite a chave pela qual você irá buscar(name, position, department, salary): ").toLowerCase()
        let possiveis = ["name", "position", "department", "salary"]

        if (!possiveis.includes(chave)) {
            console.log("Digite uma chave possível!")
            continue
        }
        let valor = promptText(prompt, `Digite o valor que você quer buscar em ${chave}`)
        if (chave === "salary" && isNaN(Number(valor))) {
            console.log("Digite um valor numérico para salário.")
            continue
        }

        let resultado = employees.filter(employee => {
            if (chave === "salary") {
                return employee[chave] === Number(valor)
            }
            return employee[chave].toLowerCase().includes(valor.toLowerCase())
        })

        if (resultado.length === 0) {
            console.log("Nenhum funcionário encontrado!")
        }
        else {
            resultado.forEach(employee => console.log(employee))
        }
        return
    }
}
module.exports = searchEmployee