const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const pause = require("../funcoes gerais/pause")

const addMedico = require("../medico/addMedico")
const listMedico = require("../medico/listMedico")
const atuaMedico = require("../medico/atuaMedico")
const delMedico = require("../medico/delMedico")
const buscarMedico = require("../medico/buscarMedico")

const medicos = require("../dados/arraymedicos")
function menuMedico() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao gerenciamento dos médicos!
        1 - Adicionar médico.
        2 - Listar médicos.
        3 - Atualizar médico.
        4 - Deletar médico.
        5 - Buscar médico
        0 - Voltar ao menu principal.`)
        let decisao = promptNumber(prompt, "Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                addMedico(medicos)
                pause()
                break
            case 2:
                listMedico(medicos)
                break
            case 3:
                atuaMedico(medicos)
                pause()
                break
            case 4:
                delMedico(medicos)
                pause()
                break
            case 5:
                buscarMedico(medicos)
                break
            case 0:
                return
            default:
                console.log("Digite um número possível!")
                continue
        }
    }
}
module.exports = menuMedico