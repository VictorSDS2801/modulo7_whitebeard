const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const promptNumber = require("../funcoes gerais/promptNumber")
const createid = require("./funcoes especificas/creteidconsulta")
const pause = require("../funcoes gerais/pause")

const idexistemedico = require("../medico/funcoes especificas/idexistemedicos")
const idexistepaciente = require("../paciente/funcoes especificas/idexistepaciente")

const medicos = require("../dados/arraymedicos")
const pacientes = require("../dados/arraypacientes")

function addConsulta(consultas) {
    console.clear()
    let id = createid(consultas)

    let data = promptText(prompt, "Digite a data da consulta: ")
    let idMedico
    while (true) {
        idMedico = promptNumber(prompt, "Digite o id do médico da consulta: ")
        if (idexistemedico(medicos, idMedico)) break
        console.log("Digite um id de médico existente!")
        pause()
    }
    let idPaciente
    while (true) {
        idPaciente = promptNumber(prompt, "Digite o id do paciente da consulta: ")
        if (idexistepaciente(pacientes, idPaciente)) break
        console.log("Digite um id de paciente existente!")
        pause()
    }
    let descricao = promptText(prompt, "Digite a descrição da consulta: ")

    consultas.push({id: id, data: data, idMedico: idMedico, idPaciente: idPaciente, descricao: descricao})
    console.log("Consulta adicionada com sucesso!")
    return
}
module.exports = addConsulta