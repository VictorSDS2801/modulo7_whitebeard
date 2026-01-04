function idExiste(medicos, id) {
    return medicos.some(medico => medico.id === id);
}
module.exports = idExiste