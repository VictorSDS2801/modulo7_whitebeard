function buscarPosicaoPorId(medicos, id) {
    return medicos.findIndex(medico => medico.id === id);
}
module.exports = buscarPosicaoPorId
