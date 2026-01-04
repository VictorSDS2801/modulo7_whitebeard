const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const pause = require("../funcoes gerais/pause")

function buscarPaciente(pacientes) {
    console.clear()
    const chave = promptText(prompt, "Buscar por nome ou dataNascimento?: ").toLowerCase()

    const resultados = pacientes.filter(p => 
        p.nome.toLowerCase().includes(chave) ||
        p.dataNascimento.toLowerCase().includes(chave)
    )

    if (resultados.length === 0) {
        console.log("Nenhum paciente encontrado!")
    }
    else {
        resultados.forEach(p => console.log(p))
    }

    pause()
}
module.exports = buscarPaciente