const Department = require('./department');
const Role = require('./Role');
const Employee = require('./Employee');

// This block of code defines the relationships between the tables
Department.hasMany(Role, {
    foreignKey: 'department_id'
});

Role.belongsTo(Department, {
    foreignKey: 'department_id'
});

Employee.hasMany(Employee, {
    foreignKey: 'manager_id'
});

Employee.belongsTo(Employee, {
    foreignKey: 'manager_id'
});

module.exports = { Department, Role, Employee };