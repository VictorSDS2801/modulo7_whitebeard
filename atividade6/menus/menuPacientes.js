const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

const addPaciente = require("../paciente/addPaciente")
const listPacientes = require("../paciente/listPacientes")
const atuaPaciente = require("../paciente/atuaPaciente")
const delPaciente = require("../paciente/delPaciente")
const buscarPaciente = require("../paciente/buscarPaciente")

const pacientes = require("../dados/arraypacientes")
function menuPacientes() {
    while (true)  {
        console.clear()
        console.log(`Bem vindo(a) ao gerenciamneto de pacientes!
        1 - Adicionar paciente.
        2 - Listar pacientes.
        3 - Atualizar paciente.
        4 - Deletar paciente.
        5 - Buscar paciente.
        0 - voltar ao menu principal.
        `)
        let decisao = promptNumber(prompt, "Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                addPaciente(pacientes)
                pause()
                break
            case 2:
                listPacientes(pacientes)
                break
            case 3:
                atuaPaciente(pacientes)
                pause()
                break
            case 4:
                delPaciente(pacientes)
                pause()
                break
            case 5:
                buscarPaciente(pacientes)
                break
            case 0:
                return
            default:
                console.log("Digite um número possível!")
                continue
        }
    }
}
module.exports = menuPacientes