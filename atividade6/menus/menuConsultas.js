const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")
const consultas = require("../dados/arrayconsultas")

const addConsulta = require("../consulta/addConsulta")
const listConsultas = require("../consulta/listConsultas")
const atuaConsulta = require("../consulta/atuaConsulta")
const delConsulta = require("../consulta/delConsulta")
const buscarConsulta = require("../consulta/buscarconsulta")
function menuConsultas() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao gerenciamento de consultas!
        1 - Adicionar consulta.
        2 - Listar consultas.
        3 - Atualizar consulta.
        4 - Deletar consulta.
        5 - Buscar consulta.
        0 - Voltar ao menu principal.
        `)
        let decisao = promptNumber(prompt, "Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                addConsulta(consultas)
                pause()
                break
            case 2:
                listConsultas(consultas)
                break
            case 3:
                atuaConsulta(consultas)
                pause()
                break
            case 4:
                delConsulta(consultas)
                pause()
                break
            case 5:
                buscarConsulta(consultas)
                break
            case 0:
                return
            default:
                console.log("Digite uma opção possível!")
                continue
        }
    }
}
module.exports = menuConsultas