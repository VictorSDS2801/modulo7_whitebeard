const prompt = require("prompt-sync")()
const createid = require("./createid")

function addbook(books) {
    let newid = createid()
    let title = prompt("Digite o título do livro: ")
    let author = prompt("Digite o autor do livro: ")
    let year = Number(prompt("Digite o ano que o livro foi lançado: "))
    let genre = prompt("Digite o gênero do livro: ")

    if (isNaN(year) || year > 2026 || year < 1) {
        console.log("Digite um ano correspondente!")
        return addbook(books)
    }
    else {
        books.push({id: newid, title: title, author: author, year: year, genre: genre})
        console.log("O livro foi adicionado com sucesso!")
        return books
    }
}
module.exports = addbook