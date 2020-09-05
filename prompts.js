//route to server.js and write prompts here for nodejs

const inquirer = require('inquirer');

//module.exports = { prompts } instead
function mainPrompt() {
    return inquirer
        .prompt({
            name: 'question1',
            message: 'What would you like to do?',
            type: 'list',
            choices: 
            [
                'View all employees',
                'View all employees by team',
                'View all employees by role',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role',
                'Quit'
            ]
        })
        //add and update selections need more prompts
}

module.exports = mainPrompt;