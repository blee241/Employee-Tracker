const inquirer = require('inquirer');
const connection = require('./config/connection');

const questionUser = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
                name: 'action'
            }
        ]).then( res => {
            switch (res.action) {
                case 'View all departments':
                    viewDepts();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDept();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    console.log('6');
                    break;
                case 'Update an employee role':
                    console.log('7');
                    break;
            }
        });
};

const viewDepts = () => {
    connection.query(
        'SELECT * FROM Department',
        function(err, results) {
            console.table(results);
        }
    );
    questionUser();
}

const viewRoles = () => {
    connection.query(
        'SELECT * FROM Role',
        function(err, results) {
            console.table(results);
        }
    );
    questionUser();
}

const viewEmployees = () => {
    connection.query(
        'SELECT * FROM Employee',
        function(err, results) {
            console.table(results);
        }
    );
    questionUser();
}

const addDept = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter new department name',
                name: 'deptName',
            }
        ]).then( res => {
            const deptName = res.deptName;
            connection.query(
                `INSERT INTO Department (name)
                VALUES  ('${deptName}');`,
                function(err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Successfully added department');
                    }
                }
            );
            questionUser();
        })
}

const addRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter new role title',
                name: 'roleTitle',
            },
            {
                type: 'number',
                message: 'Enter new role salary',
                name: 'roleSalary',
            },
            {
                type: 'number',
                message: 'Enter the department id of the department that the new role will belong to',
                name: 'deptID',
            }
        ]).then( res => {
            const roleTitle = res.roleTitle;
            const roleSalary = res.roleSalary;
            const deptID = res.deptID;
            connection.query(
                `INSERT INTO Role (title, salary, department_id)
                VALUES  ('${roleTitle}', ${roleSalary}, ${deptID});`,
                function(err, results) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Successfully added role');
                    }
                }
            );
            questionUser();
        })
}

questionUser();