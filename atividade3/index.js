const prompt = require("prompt-sync")()
const addmovie = require("./funcionalidades/addmovie")
const listmovies = require("./funcionalidades/listmovies")
const attmovie = require("./funcionalidades/attmovie")
const delmovie = require("./funcionalidades/delmovie")
const searchmovie = require("./funcionalidades/searchmovie")
const quit = require("./funcionalidades/quit")

let movies = [
    {id: 1, title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Ficção científica"}, 
    {id: 2, title: "Amnésia", director: "Christopher Nolan", year: 2001, genre: "Suspense"},
    {id: 3, title: "Django: Livre", director: "Quentin Tarantino", year: 2012, genre: "Faroeste"},
    {id: 4, title: "Bastardos inglórios", director: "Quentin Tarantino", year: 2009, genre: "Ação"},
    {id: 5, title: "Homem aranha: através do aranhaverso", director: "Kemp Powers", year: 2023, genre: "Aventura"}
]


function programa() {
    while (true) {
        console.log("Bem vindo ao gerenciamento de filmes!")
        console.log("Digite 1 se você deseja adicionar um novo filme.")
        console.log("Digite 2 se você deseja listar todos os filmes.")
        console.log("Digite 3 se você deseja atualizar um dos filmes.")
        console.log("Digite 4 se você deseja deletar algum filme.")
        console.log("Digite 5 se você deseja buscar algum filme.")
        console.log("Digite 6 se você deseja sair do programa.")
        let decisao = prompt("Digite a sua resposta: ")

        switch (decisao) {
            case '1':
                addmovie(movies)
                programa()
                break
            case '2':
                listmovies(movies)
                programa()
                break
            case '3':
                attmovie(movies)
                programa()
                break
            case '4':
                delmovie(movies)
                programa()
                break
            case '5':
                searchmovie(movies)
                programa()
                break
            case '6':
                quit()
                break
            default:
                console.log("Digite um número válido!")
                programa()
        }
    }
}
programa()
module.exports = movies