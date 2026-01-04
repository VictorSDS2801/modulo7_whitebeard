function createidpaciente(pacientes) {
    if (pacientes.length === 0) return 1;

    const maiorId = Math.max(...pacientes.map(paciente => paciente.id));
    return maiorId + 1;
}
module.exports = createidpaciente
