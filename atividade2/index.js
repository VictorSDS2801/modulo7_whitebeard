const prompt = require("prompt-sync")()
const addStudent = require("./funcionalidades/addStudent")
const listStudents = require("./funcionalidades/listStudents")
const attStudent = require("./funcionalidades/attStudent")
const delStudent = require("./funcionalidades/delStudent")
const searchStudent = require("./funcionalidades/searchStudent")
const quit = require("./funcionalidades/quit")


let estudantes = [
    {id: 1, name: "Victor Diogo Santos de Araujo", registration: 20230245, course: "Engenharia de software", year: 2023},
    {id: 2, name: "Giovanna Victória Santos de Araujo", registration: 20233540, course: "Medicina", year: 2023},
    {id: 3, name: "Jacira Lânia de Jesus Santos", registration: 20201458, course: "Psicologia", year: 2015},
    {id: 4, name: "Murilo Feitosa de Brito", registration: 20221857, course: "Medicina", year: 2019},
    {id: 5, name: "Robervaldo dos Santos Junior", registration: 20245768, course: "Engenharia de pesca", year: 2013}
]
function programa() {
    console.log("Bem vindo ao cadastro de estudantes!")
    console.log("Digite 1 para adicionar um novo estudante.")
    console.log("Digite 2 para listar todos os estudantes.")
    console.log("Digite 3 para atualizar um dos estudantes.")
    console.log("Digite 4 para deletar algum estudante.")
    console.log("Digite 5 para buscar algum estudante.")
    console.log("Digite 6 para sair do programa.")
    let decisao = prompt("Digite aqui a sua resposta: ")

    switch (decisao) {
        case '1':
            addStudent(estudantes)
            programa()
            break
        case '2':
            listStudents(estudantes)
            programa()
            break
        case '3':
            attStudent(estudantes)
            programa()
            break
        case '4':
            delStudent(estudantes)
            programa()
            break
        case '5':
            searchStudent(estudantes)
            programa()
            break
        case '6':
            quit()
        default:
            console.log("Digite algum número correspondente!")
    }
}
programa()