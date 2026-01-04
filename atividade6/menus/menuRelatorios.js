const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

const medicos = require("../dados/arraymedicos")
const pacientes = require("../dados/arraypacientes")
const consultas = require("../dados/arrayconsultas")

const consultasPorMedico = require("../relatorios/consultasPorMedico")
const pacientesPorMedico = require("../relatorios/pacientesPorMedico")
const medicosPorPaciente = require("../relatorios/medicosPorPaciente")
const consultasPorMes = require("../relatorios/consultasPorMes")
function menuRelatorios() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao menu de relatórios!
        1 - Todas as consultas de um médico.
        2 - Todos os pacientes atendidos por um médico.
        3 - Todos os médicos que atenderam um paciente.
        4 - Todas as consultas em um mês específico
        0 - Voltar ao menu principal.
        `)
        let decisao = promptNumber(prompt, "Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                consultasPorMedico(consultas, medicos)
                pause()
                break
            case 2:
                pacientesPorMedico(consultas, pacientes, medicos)
                pause()
                break
            case 3:
                medicosPorPaciente(consultas, medicos, pacientes)
                pause()
                break
            case 4:
                consultasPorMes()
                pause()
                break
            case 0:
                return
            default:
                console.log("Digite uma opção possível!")
                continue
        }
    }
}
module.exports = menuRelatorios