const prompt = require("prompt-sync")()
const createid = require("./createId")

function addmovie(movies) {
    let id = createid(movies)

    let title = prompt("Digite o título do filme: ")
    let director = prompt("Digite o diretor do filme: ")
    let year = Number(prompt("Digite o ano em que o filme foi lançado: "))
    let genre = prompt("Digite o gênero do filme: ")

    if (isNaN(year) || year < 1895 || year > 2026) {
        console.log("Digite um ano possível!")
        return addmovie(movies)
    }
    else {
        movies.push({id: id, title: title, director: director, year: year, genre: genre})
        console.log("Filme adicionado com sucesso!")
        return movies
    }
}
module.exports = addmovie
