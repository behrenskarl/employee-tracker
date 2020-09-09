const mysql = require('mysql');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const config = require('./package.json');
const prompts = require('./prompts');
const connection = require('./db/connection');
const db = require('./db');
require('console.table');

async function viewAllTables() {
    const titles = await db.viewAllTables().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();  
}  

async function viewAllEmployees() {
    const titles = await db.viewAllEmployees().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};

async function viewAllByTeams() {
    const titles = await db.viewAllByTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};

async function viewAllByRoles() {
    const titles = await db.viewAllByRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
async function viewOnlyTeams() {
    const titles = await db.viewOnlyTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    return titles
};

async function viewOnlyRoles() {
    const titles = await db.viewOnlyRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    return titles 
};

async function updateEmployeeRole() {
    const employees = await db.viewAllEmployees();
    console.log(employees);
    const employeeChoices = employees.map(({ First_Name, Last_Name, id }) => ({ 
        name: `${First_Name} ${Last_Name}`,
        value: id
        })
    );
    const { employeeID } = await inquirer.prompt([
        {
        type: 'list',
        name: 'employeeID',
        message: 'Which employee would you like to update?',
        choices: employeeChoices
        }
    ]);

    const roles = await db.viewOnlyRoles();
    const roleChoice = roles.map(({ title, id }) => ({ 
        name: title,
        value: id
        })
    );
    const answer = await inquirer.prompt([
        {
        type: 'list',
        name: 'roleID',
        message: 'Which role would you like to update?',
        choices: roleChoice
        }
    ]);
    await db.updateEmployeeRole(employeeID, answer.roleID);
        console.log('\n');
        console.log("Updated role successfully.");
        console.log('\n');  
        return mainPrompt();
};

async function addNewTeam() { 
    inquirer.prompt(prompts.newTeamPrompt).then((response) => {
        connection.query(
        `
        INSERT INTO team
            (name)
        VALUES
            ('${response.newTeamName}');
        `
        );
        console.log('\n');
        console.log("New team added successfully.");
        console.log('\n');  
        return mainPrompt();
    });
};


async function addNewRole() { 
    inquirer.prompt(prompts.newRolePrompt).then((response) => {
        connection.query(
        `
        INSERT INTO role
            (title, team_id)
        VALUES 
            ('${response.newRoleTitle}', ${response.newTeamID});
        `
        );
        console.log('\n');
        console.log("New role added successfully.");
        console.log('\n');  

        return mainPrompt();
    });
};

async function addNewEmployee() {
    const teams = await viewOnlyTeams();
    const roles = await viewOnlyRoles();
    prompts.newEmployeePrompt[2].choices = teams.map(team => ({ 
        name: team.name, 
        value: team.id 
        })
    );
    prompts.newEmployeePrompt[3].choices = roles.map(role => ({ 
        name: role.title, 
        value: role.id
        })
    );
    inquirer.prompt(prompts.newEmployeePrompt).then((response) => {
        connection.query(
            ` 
            INSERT INTO employee
                (first_name, last_name, salary, role_id, manager_id)
            VALUES
                ('${response.newFirstName}', '${response.newLastName}',  ${response.newSalary}, ${response.newRoleID}, 1);
            `

            );            
        connection.query(
            ` 
            INSERT INTO role
                (title, team_id)
            VALUES 
                ('${response.newRole}', ${response.newTeam});
            `
        ); 
        console.log('\n');
        console.log("New employee added successfully.");
        console.log('\n');  
        return mainPrompt();
    });
};

async function mainPrompt() {
    inquirer   
        .prompt(prompts.mainPrompt)
    .then((answer) => {
        switch (answer.choice) {
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'View all employees by team':
            viewAllByTeams();
            break;
        case 'View all employees by role':
            viewAllByRoles();
            break;
        case 'Add team':
            viewOnlyTeams();
            addNewTeam();
            break;
        case 'Add role':
            viewOnlyRoles();
            addNewRole();
            break;
        case 'Add employee':
            addNewEmployee();
            break;
        case 'Update employee role':
            updateEmployeeRole();
            break;
        default:
            return process.exit();
        }
    });
}

function init() {
    console.log(logo(config).render());
    viewAllTables();
}

init();