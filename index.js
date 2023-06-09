const inquirer = require('inquirer');

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
                    console.log('1');
                    break;
                case 'View all roles':
                    console.log('2');
                    break;
                case 'View all employees':
                    console.log('3');
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
        })
}

questionUser();