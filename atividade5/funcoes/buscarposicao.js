function buscarPosicaoPorId(employees, id) {
    return employees.findIndex(employee => employee.id === id);
}
module.exports = buscarPosicaoPorId
