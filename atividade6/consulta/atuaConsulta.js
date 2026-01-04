const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const buscarposicao = require("./funcoes especificas/buscarposicao")
const idexisteconsultas = require("./funcoes especificas/idexisteconsultas")
const idexistepacientes = require("../paciente/funcoes especificas/idexistepaciente")
const idexistemedicos = require("../medico/funcoes especificas/idexistemedicos")
const pause = require("../funcoes gerais/pause")

const medicos = require("../dados/arraymedicos")
const pacientes = require("../dados/arraypacientes")
function atuaConsulta(consultas) {
    console.clear()

    let id
    while (true) {
        id = promptNumber(prompt, "Digite o id da consulta que você deseja atualizar: ")
        if (idexisteconsultas(consultas, id)) break
        console.log("Consulta não encontrada!")
        pause()
    }
    const posicao = buscarposicao(consultas, id)
    const consulta = consultas[posicao]

    console.log("Consulta atual:")
    console.log(consulta)
    console.log("\n(Pressione ENTER para manter o valor)\n")

    let data = prompt(`Nova data (${consulta.data}): `) || consulta.data


    let idMedico
    while (true) {
        let entrada = prompt(`Novo idMedico (${consulta.idMedico}): `)
        if (entrada === "") {
            idMedico = consulta.idMedico
            break
        }
        let novoId = Number(entrada)
        if (idexistemedicos(medicos, novoId)) {
            idMedico = novoId
            break
        }
        console.log("Médico não encontrado!")
    }

    let idPaciente
    while (true) {
        let entrada = prompt(`Novo idPaciente (${consulta.idPaciente}): `)
        if (entrada === "") {
            idPaciente = consulta.idPaciente
            break
        }
        let novoId = Number(entrada)
        if (idexistepacientes(pacientes, novoId)) {
            idPaciente = novoId
            break
        }
        console.log("Paciente não encontrado!")
    }

    let descricao = prompt(`Nova descrição (${consulta.descricao}): `) || consulta.descricao

    const confirmar = prompt("Confirmar atualização? (s/n): ").toLowerCase()
    if (confirmar !== "s") {
        console.log("Atualização cancelada!")
        return
    }

    consultas[posicao] = {...consulta, data, idMedico, idPaciente, descricao}

    console.log("Consulta alterada com sucesso!")
}
module.exports = atuaConsulta