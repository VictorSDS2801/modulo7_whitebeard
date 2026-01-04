function buscarPosicaoPorId(pacientes, id) {
    return pacientes.findIndex(paciente => paciente.id === id);
}
module.exports = buscarPosicaoPorId
