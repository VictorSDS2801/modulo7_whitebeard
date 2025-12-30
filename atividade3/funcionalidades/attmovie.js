const prompt = require("prompt-sync")()
const idExiste = require("./idexiste")
const buscarposicao = require("./buscarposicao")

function attmovie(movies) {
    let id = Number(prompt("Digite o id do filme que você deseja atualizar"))

    
    if (isNaN(id) || !idExiste(movies, id)) {
        console.log("Digite um id existente!")
        return attmovie(movies)
    }
    let posicao = buscarposicao(movies, id)

    let newtitle = prompt("Digite o novo título do filme: ")
    let newdirector = prompt("Digite o novo diretor do filme: ")
    let newyear = Number(prompt("Digite o novo ano de lançamento do filme: "))
    let newgenre = prompt("Digite o novo gênero do filme: ")
    
    if (isNaN(newyear) || newyear < 1895 || newyear > 2026) {
        console.log("Digite um ano disponível!")
        return attmovie(movies)
    }
    else {
        movies[posicao].title = newtitle
        movies[posicao].director = newdirector
        movies[posicao].year = newyear
        movies[posicao].genre = newgenre
        console.log("Filme atualizado com sucesso!")
        return movies
    }
}
module.exports = attmovie
