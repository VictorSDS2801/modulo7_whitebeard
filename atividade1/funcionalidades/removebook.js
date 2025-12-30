const prompt = require("prompt-sync")()
const idexiste = require("./idexiste")
const buscarposicao = require("./buscarposicao")

function removebook(books) {
    let id = Number(prompt("Digite o id do livro que você deseja remover: "))
    if (isNaN(id) || !idexiste(books, id)) {
        console.log("Digite um id válido!")
        return removebook(books)
    }
    let posicao = buscarposicao(books, id)
    books.splice(posicao, 1)
    console.log("Livro removido com sucesso!")
    return books
}
module.exports = removebook