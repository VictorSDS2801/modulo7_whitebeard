function printEmployee(employee) {
    console.log(`
    ID: ${employee.id}
    Nome: ${employee.name}
    Cargo: ${employee.position}
    Departamento: ${employee.department}
    Salário: R$ ${employee.salary}
    `)
}
module.exports = printEmployee
