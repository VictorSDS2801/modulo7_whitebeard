const prompt = require("prompt-sync")()
const idexiste = require("./idexiste")
const buscarposicao = require("./buscarposicao")

function delmovie(movies) {
    let id = Number(prompt("Digite aqui o id do filme que você deseja deletar: "))
    
    if (isNaN(id) || !idexiste(movies, id)) {
        console.log("Digite um id existente!")
        return delmovie(movies)
    }
    let posicao = buscarposicao(movies, id)
    movies.splice(posicao, 1)
    console.log("Filme deletado com sucesso!")
    return movies
}
module.exports = delmovie