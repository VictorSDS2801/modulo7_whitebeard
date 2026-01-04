function idExiste(consultas, id) {
    return consultas.some(consulta => consulta.id === id);
}
module.exports = idExiste