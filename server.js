const mysql = require('mysql');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const config = require('./package.json');
const prompts = require('./prompts');
const connection = require('./db/connection');
const db = require('./db');
require('console.table');

//TODO: async function viewAllTables(); that returns all the info from the DB, this table should be called upon init(); with Logo
async function viewAllTables() {
    const titles = await db.viewAllTables().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();  
}  


//async function calls database and returns a console log of All Employees in a table format then cycles back to first prompt
async function viewAllEmployees() {
    const titles = await db.viewAllEmployees().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
//async function calls database and returns a console log of All Employees By Team in a table format then cycles back to first prompt
async function viewAllByTeams() {
    const titles = await db.viewAllByTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
//async function calls database and returns a console log of All Employees By Role in a table format then cycles back to first prompt
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

// FUNCTION RETURNS DB TABLE OF ROLES 
async function viewOnlyRoles() {
    const titles = await db.viewOnlyRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    return titles 
};

//updateRole(); prompt them for new info user wants to update. then updates the db table
// function updateEmployeeRole() {
//     let query = connection.query(
//         'UPDATE role SET ? WHERE ?'
//     )
// }

//addTeam(); 'INSERT INTO team (team)'
async function addNewTeam() { 
    inquirer.prompt(prompts.newTeamPrompt).then((response) => {
        // Store the responses in a variable then add them to the db as a new role
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

//addNewRole(); creates a new role for employees to be categorized by 
async function addNewRole() { 
    inquirer.prompt(prompts.newRolePrompt).then((response) => {
        // Store the responses in a variable then add them to the db as a new role
        connection.query(
        `
        INSERT INTO role
            (title, team_id)
        VALUES
            ('${response.newRoleTitle}', ${response.newRoleTeamID});
        `
        );
        console.log('\n');
        console.log("New role added successfully.");
        console.log('\n');  

        return mainPrompt();
    });
};

//addEmployee();
//NEEDS TO BE ABLE TO ADD PLAYER NAME, SALARY, LIST CHOICES FOR TEAM AND ROLE
async function addNewEmployee() {
    const roles = await viewOnlyRoles();
    const teams = await viewOnlyTeams();
    prompts.newEmployeePrompt[2].choices = roles.map((role, index) => ({ name: role.title, value: {id: index+1, name: role.title } }));
    prompts.newEmployeePrompt[3].choices = teams.map(team => ({ name: team.name, value: team.id }));
    inquirer.prompt(prompts.newEmployeePrompt).then((response) => {

        connection.query(
            ` 
            INSERT INTO employee
                (first_name, last_name, salary, role_id, manager_id)
            VALUES
                ('${response.newFirstName}', '${response.newLastName}',  ${response.newSalary}, ${response.newRole.id}, 1);
            `

            );            
        connection.query(
            ` 
            INSERT INTO role
                (title, team_id)
            VALUES 
                ('${response.newRole.name}', ${response.newTeam});
            `
        );
        console.log('\n');
        console.log("New employee added successfully.");
        console.log('\n');  

        return mainPrompt();
    });
};


//mainPrompt(); function code here: switch cases and inquirer.prompt(prompts.question1); viewAllTeams(); would be called here based on case
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
            //function
            addNewTeam();
            break;
        case 'Add role':
            viewOnlyRoles();
            addNewRole();
            break;
        case 'Add employee':
            //function
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


//async function init(); with await ends with calling mainPrompts(); 
function init() {
    console.log(logo(config).render());
    viewAllTables();
}

init();