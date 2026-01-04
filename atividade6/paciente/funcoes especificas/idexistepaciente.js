function idExiste(pacientes, id) {
    return pacientes.some(paciente => paciente.id === id);
}
module.exports = idExiste