const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Karl41693',
    database: 'nba_rosters'
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;