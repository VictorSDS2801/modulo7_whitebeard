const prompt = require("prompt-sync")()
const idexiste = require("./idexiste")

function atuabook(books) {
    let id = Number(prompt("Digite o id do livro que você deseja atualizar: "))
    if (isNaN(id) || !idexiste(books, id)) {
        console.log("Digite um id compatível.")
        return atuabook(books)
    }

    let newtitle = prompt("Digite o novo nome do livro: ")
    let newauthor = prompt("Digite o novo nome do autor: ")
    let newyear = Number(prompt("Digite o novo ano de lançamento: "))
    let newgenre = prompt("Digite o novo gênero do livro: ")

    if (isNaN(newyear) || newyear <= 0 || newyear > 2026) {
        console.log("Ano inválido.")
        return atuabook(books)
    }

    let posicao = id - 1

    books[posicao].title = newtitle
    books[posicao].author = newauthor
    books[posicao].year = newyear
    books[posicao].genre = newgenre

    console.log("Livro atualizado com sucesso!")
    return books

}
module.exports = atuabook