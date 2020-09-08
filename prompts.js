//route to server.js and write prompts here for nodejs

const inquirer = require('inquirer');
const db = require('./db');

async function viewOnlyTeams() {
    const titles = await db.viewOnlyTeams().catch(err => console.log(err));
    return titles 
};
async function viewOnlyRoles() {
    const titles = await db.viewOnlyRoles().catch(err => console.log(err));
    return titles 
};

module.exports = {
    mainPrompt: [
        {
        name: 'choice',
        message: 'What would you like to do?',
        type: 'list',
        choices: 
            [
            'View all employees',
            'View all employees by team',
            'View all employees by role',
            'Add team',
            'Add role',
            'Add employee',
            'Update employee role',
            'Quit'
            ]
        }
    ],
    newTeamPrompt: [
        {
        type: 'input',
        message: 'Input name of new team.',
        name: 'newTeamName'
        }
    ],
    newRolePrompt: [
        {
        type: 'input',
        message: 'Input a new role title.',
        name: 'newRoleTitle',
        },
        {
        type: 'input',
        message: 'Input id of team.',
        name: 'newRoleTeamID'
        }
    ],
    //LIST CHOICES FOR TEAMS AND ROLES (FUNCTION?)
    newEmployeePrompt: [
        {
        type: 'input',
        message: 'Input first name of new employee.',
        name: 'newFirstName'
        },
        {
        type: 'input',
        message: 'Input last name of new employee.',
        name: 'newLastName'
        },
        {
        type: 'list',
        message: 'What is the new employees role?',
        name: 'newRole',
        choices: [
            //function?
            
        ]
        },
        {
        type: 'list',
        message: 'What is the new employees team?',
        name: 'newTeam',
        choice: [
            //function?
            
        ]
        },
        {
        type: 'input',
        message: 'Input new employee salary.',
        name: 'newSalary'
        }
    ],
    updateRolePrompt: [
        {
        type: 'input',
        message: 'Input the employees ID whose role ID you wish to edit.',
        name: 'chosenID',
        }, 
        {
        type: 'input',
        message: 'Input the employees new role ID.',
        name: 'updatedRoleID',
        } 
    ]
};

//pseudo code

// {
//     type: 'input',
//     message: 'Input the salary of the new role.',
//     name: 'newRoleSalary',
//     },
//     {
//     type: 'input',
//     message: 'Input the team ID of the new role.',
//     name: 'newRoleID',
//     }