const prompt = require("prompt-sync")()

function searchmovie(movies) {
    let chave = prompt("Digite a chave pela qual você deseja buscar o filme(title, director, year, genre): ")
    chave = chave.toLowerCase()
    let possiveis = ["title", "director", "year", "genre"]
    if (!possiveis.includes(chave)) {
        console.log("Digite um chave possível!")
        return searchmovie(movies)
    }
    let valor = prompt(`Digite o valor que você deseja buscar em ${chave}: `)
    let resultado = movies.filter(movie => {
        if (chave === "year") {
            return movie[chave] === Number(valor)
        }

        return movie[chave].toLowerCase().includes(valor.toLowerCase())
    })

    if (resultado.length === 0) {
        console.log("Nenhum filme encontrado!")
    }
    resultado.forEach(filme => console.log(filme))
}
module.exports = searchmovie