const prompt = require("prompt-sync")()
const promptNumber = require("../funcoes gerais/promptNumber")
const menuMedico = require("./menuMedico")
const menuPacientes = require("./menuPacientes")
const menuConsultas = require("./menuConsultas")
const menuRelatorios = require("./menuRelatorios")

function programa() {
    while (true) {
        console.clear()
        console.log(`Bem vindo(a) ao gerênciamento de consultas!
        1 - Gerênciar médicos.
        2 - Gerênciar pacientes.
        3 - Gerênciar consultas.
        4 - Gerar relatórios.
        0 - Sair.`)
        let decisao = promptNumber(prompt, "Digite a sua decisão: ")
        switch (decisao) {
            case 1:
                menuMedico()
                break
            case 2:
                menuPacientes()
                break
            case 3:
                menuConsultas()
                break
            case 4:
                menuRelatorios()
                break
            case 0:
                console.log("Saindo...")
                process.exit()
            default:
                console.log("Digite um número correspondente!")
                continue
        }
    }
}
programa()