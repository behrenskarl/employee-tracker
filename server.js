const mysql = require('mysql');
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

//TODO: async function viewAllTables(); that returns all the info from the DB, this table should be called upon init(); with Logo  


//async function calls database and returns a console log of All Employees in a table format then cycles back to first prompt
async function viewAllEmployees() {
    const titles = await db.viewAllEmployees().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
//async function calls database and returns a console log of All Employees By Team in a table format then cycles back to first prompt
async function viewAllTeams() {
    const titles = await db.viewAllTeams().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};
//async function calls database and returns a console log of All Employees By Role in a table format then cycles back to first prompt
async function viewAllRoles() {
    const titles = await db.viewAllRoles().catch(err => console.log(err));
    console.log('\n');
    console.table(titles);
    mainPrompt();
};

//updateTeam(); prompt them for new info user wants to update. then updates the db table
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
            viewAllTeams();
            break;
        case 'View all employees by role':
            viewAllRoles();
            break;
        
    }
}


//async function init(); with await ends with calling mainPrompts(); 
function init() {
    mainPrompt();
}

init();