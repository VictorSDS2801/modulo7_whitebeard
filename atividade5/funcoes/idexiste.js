function idExiste(employees, id) {
    return employees.some(employee => employee.id === id);
}
module.exports = idExiste