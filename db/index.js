const connection = require('./connection');

//class and constructor for DB 
class DB {
    constructor(connection) {
        this.connection = connection;
    }
     

    //viewAllTables(); = returns a query to show all data from the DB upon init(); in server.js


    //viewAllTeams() = returns DB with teams 
    //TODO: change sql syntax to return proper data
    viewAllTeams() {
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

    }
    
    //more functions for calling different data
   
   
   //viewAllRoles(); = return a query from the DB with all the roles
    viewAllRoles() {
        return this.connection.query(
            `
        SELECT
            role.id,
            role.title AS Role,
            role.salary AS Salary,
            team.name AS Team
        FROM
            role
        LEFT JOIN
            team ON role.team_id = team.id
        ORDER BY
            team.id;
        `
        );
    }


    // viewAllEmployees();

    


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