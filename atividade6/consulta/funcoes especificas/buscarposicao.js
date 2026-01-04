function buscarPosicaoPorId(consultas, id) {
    return consultas.findIndex(consulta => consulta.id === id);
}
module.exports = buscarPosicaoPorId
