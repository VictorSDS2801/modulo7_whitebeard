function createid(employees) {
    if (employees.length === 0) return 1;

    const maiorId = Math.max(...employees.map(employee => employee.id));
    return maiorId + 1;
}
module.exports = createid;
