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
                    console.log('4');
                    break;
                case 'Add a role':
                    console.log('5');
                    break;
                case 'Add an employee':
                    console.log('6');
                    break;
                case 'Update an employee role':
                    console.log('7');
                    break;
            }
            questionUser();
        });
};

const viewDepts = () => {
    connection.query(
        'SELECT * FROM Department',
        function(err, results) {
            console.log(results);
        }
    )
}

const viewRoles = () => {
    connection.query(
        'SELECT * FROM Role',
        function(err, results) {
            console.log(results);
        }
    )
}

const viewEmployees = () => {
    connection.query(
        'SELECT * FROM Employee',
        function(err, results) {
            console.log(results);
        }
    )
}

questionUser();