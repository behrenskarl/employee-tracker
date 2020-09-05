const mysql = require('mysql');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
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

//updateRole(); prompt them for new info user wants to update. then updates the db table
//addTeam(); 'INSERT INTO team (team)'
//addRole();
//addEmployee();

//mainPrompt(); function code here: switch cases and inquirer.prompt(prompts.question1); viewAllTeams(); would be called here based on case
async function mainPrompt() {
    const choice = await prompts();
    
    switch (choice.question1) {
        case 'View all employees':
            viewAllEmployees();
            break;
        case 'View all employees by team':
            viewAllByTeams();
            break;
        case 'View all employees by role':
            viewAllByRoles();
            break;
        case 'Add department':
            //function
            break;
        case 'Add role':
            //function
            break;
        case 'Add employee':
            //function
            break;
        case 'Update employee role':
            //function
            break;
        case 'Quit':
            break;
            
        
    };
}


//async function init(); with await ends with calling mainPrompts(); 
function init() {
    viewAllTables();
    mainPrompt();
}

init();