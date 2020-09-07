const connection = require('./connection');

//class and constructor for DB 
class DB {
    constructor(connection) {
        this.connection = connection;
    }
     

    //viewAllTables(); = returns a query to show all data from the DB upon init(); in server.js
    viewAllTables() {
        return this.connection.query(
            `
        SELECT
            role.id, 
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role,
            role.salary AS Salary,
            team.name AS Team
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		JOIN
			team ON role.team_id = team.id
        ORDER BY 
            role.id;
        `
        );        
    };


    //viewAllTeams() = returns DB with teams 
    viewAllByTeams() {
        return this.connection.query(
            `
        SELECT 
            employee.id AS ID, 
            team.name AS Team_Name,
			employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		JOIN
			team ON role.team_id = team.id
        ORDER BY 
            role.id;
        `
        );

    };
    
    //more functions for calling different data
   
   
   //viewAllRoles(); = return a query from the DB with all the roles
    viewAllByRoles() {
        return this.connection.query(
            `
        SELECT
            role.id, 
            role.title AS Role,
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.salary AS Salary,
            team.name AS Team
        FROM 
            employee
        LEFT JOIN
            role ON employee.id = role.id
		JOIN
			team ON role.team_id = team.id
        ORDER BY 
            role.title;
        `
        );
    };


    // viewAllEmployees();
    viewAllEmployees() {
        return this.connection.query(
            `
        SELECT
            employee.id, 
            employee.first_name AS First_Name, 
            employee.last_name AS Last_Name,
            role.title AS Role
        FROM 
            employee
        LEFT JOIN
            role ON employee.role_id = role.id
        ORDER BY 
            employee.id;
        `
        );
    };
    //Displays Teams by order of Team ID
    viewOnlyTeams() {
        return this.connection.query(
            `SELECT * FROM team ORDER BY team.id`
        );
    };
    viewOnlyRoles() {
        return this.connection.query(
            `SELECT DISTINCT role.title FROM role`
        );
    };
    //addEmployee();
    //NEEDS TO BE ABLE TO ADD PLAYER NAME, SALARY, LIST CHOICES FOR TEAM AND ROLE
    


}

const db = new DB (connection)
module.exports = db;


//psuedo code 

    //TESTS QUERY RETURN

        // return this.connection.query('SELECT * FROM team')
        // .then(teams => {
        //     console.log(teams);
        //     return teams 
        // })