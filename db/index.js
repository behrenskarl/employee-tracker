const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            team.name AS Team
        FROM
            title
        LEFT JOIN
            team ON title.team_id = team.id
        ORDER BY
            team.id;
        `
        );
    }
}