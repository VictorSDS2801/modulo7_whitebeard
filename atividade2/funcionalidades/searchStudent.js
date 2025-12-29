const prompt = require("prompt-sync")()

function searchStudent(estudantes) {
    let chave = prompt("Digite a chave que você deseja buscar (name, registration, course): ")

    let posspesqui = ["name", "registration", "course"]

    if (!posspesqui.includes(chave)) {
        console.log("Chave inválida!")
        return searchStudent(estudantes)
    }

    let valor = prompt(`Digite o valor para buscar em ${chave}`)

    let resultado = estudantes.filter(estudante => {
        if (chave === "registration") {
            return estudante[chave] === Number(valor)
        }

        return estudante[chave].toLowerCase().includes(valor.toLowerCase())
    })

    if (resultado.length === 0) {
        console.log("Nenhum estudante encontrado.")
    }

    return resultado
}
module.exports = searchStudent