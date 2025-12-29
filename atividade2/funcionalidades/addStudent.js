const prompt = require("prompt-sync")()
const createId = require("./crateId")

function addStudent(estudantes) {
    let id = createId()
    
    let name = prompt("Digite o nome do estudante: ")
    let registration = Number(prompt("Digite a matrícula do estudante: "))
    let course = prompt("Digite o curso do estudante: ")
    let year = Number(prompt("Digite o ano de início do curso do estudante:"))

    if (isNaN(registration) || isNaN(year) || year > 2026 || year < 1900) {
        console.log("Digite um número correspondente no campo da matrícula e no ano!")
        return addStudent(estudantes)
    }
    else {
        estudantes.push({id: id, name: name, registration: registration, course: course, year: year})
        console.log("Estudante adicionado com sucesso!")
        return estudantes
    }
}
module.exports = addStudent
