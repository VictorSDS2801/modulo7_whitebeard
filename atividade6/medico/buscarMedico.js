const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const pause = require("../funcoes gerais/pause")

function buscarMedico(medicos) {
    console.clear()
    const chave = promptText(prompt, "Buscar por nome ou especialidade: ").toLowerCase()

    const resultados = medicos.filter(m =>
        m.nome.toLowerCase().includes(chave) ||
        m.especialidade.toLowerCase().includes(chave)
    )

    if (resultados.length === 0) {
        console.log("Nenhum médico encontrado.")
    } else {
        resultados.forEach(m => console.log(m))
    }

    pause()
}
module.exports = buscarMedico
