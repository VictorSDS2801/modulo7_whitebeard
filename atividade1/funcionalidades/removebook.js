const prompt = require("prompt-sync")()

function removebook(books) {
    let id = Number(prompt("Digite o id do livro que você deseja remover: "))
    if (isNaN(id) || id < 1 || id > books.length) {
        console.log("Digite um id válido!")
        return removebook(books)
    }
    let posicao = id - 1
    books.splice(posicao, 1)
    console.log("Livro removido com sucesso!")
    return books
}
module.exports = removebook