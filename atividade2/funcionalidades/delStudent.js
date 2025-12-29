const prompt = require("prompt-sync")()

function delStudent(estudantes) {
    let id = Number(prompt("Digite o id do estudante que você deseja deletar: "))

    if (isNaN(id) || id > estudantes.length) {
        console.log("Digite um id exitente!")
        return delStudent(estudantes)
    }
    
    let posicao = id - 1

    estudantes.splice(posicao, 1)
    console.log("Estudante deletado com sucesso!")
    return estudantes
}
module.exports = delStudent