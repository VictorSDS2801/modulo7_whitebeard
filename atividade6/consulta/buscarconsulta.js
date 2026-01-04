const prompt = require("prompt-sync")()
const promptText = require("../funcoes gerais/promptText")
const pause = require('../funcoes gerais/pause') 

function buscarConsulta(consultas) {
    console.clear()
    const chave = promptText(prompt, "Buscar por data, idMedico, idPaciente ou descricao?: ").toLowerCase()

    const resultados = consultas.filter(c =>
        c.data.toLowerCase().includes(chave) ||
        c.idMedico.toString().includes(chave) ||
        c.idPaciente.toString().includes(chave) ||
        c.descricao.toLowerCase().includes(chave)
    )

    if (resultados.length === 0) {
        console.log("Nenhuma consulta encontrada!")
    }
    else {
        resultados.forEach(c => console.log(c))
    }
    pause()
}
module.exports = buscarConsulta