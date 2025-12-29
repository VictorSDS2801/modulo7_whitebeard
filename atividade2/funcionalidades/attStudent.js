const prompt = require("prompt-sync")()

function attStudent(estudantes) {
    let id = Number(prompt("Digite o id do estudante que você deseja atualizar: "))

    if (isNaN(id) || id > estudantes.length) {
        console.log("Digite um id disponível!")
        return attStudent(estudantes)
    }

    let newname = prompt("Digite o novo nome do estudante: ")
    let newregistration = prompt("Digite a nova matrícula do estudante: ")
    let newcourse = prompt("Digite o novo curso do estudante: ")
    let newyear = Number(prompt("Digite o novo ano de início do estudante: "))

    let posicao = id - 1
    if (isNaN(newregistration) || isNaN(newyear) || newyear < 2026 || newyear > 1900) {
        console.log("Digite uma matrícula e um ano possível!")
        return attStudent(estudantes)
    }
    else {
        estudantes[posicao].name = newname
        estudantes[posicao].registration = newregistration
        estudantes[posicao].course = newcourse
        estudantes[posicao].year = newyear
        console.log("Estudante atualizado com sucesso!")
        return estudantes
    }
}
module.exports = attStudent