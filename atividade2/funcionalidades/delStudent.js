const prompt = require("prompt-sync")()
const idexiste = require("./idexiste")
const buscarposicao = require("./buscarposicao")

function delStudent(estudantes) {
    let id = Number(prompt("Digite o id do estudante que você deseja deletar: "))

    if (isNaN(id) || !idexiste(estudantes, id)) {
        console.log("Digite um id exitente!")
        return delStudent(estudantes)
    }
    
    let posicao = buscarposicao(estudantes, id)

    estudantes.splice(posicao, 1)
    console.log("Estudante deletado com sucesso!")
    return estudantes
}
module.exports = delStudent