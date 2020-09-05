DROP DATABASE IF EXISTS nba_rosters;
CREATE database nba_rosters;

USE nba_rosters;
--NEED FOREIGN KEYS--
CREATE TABLE team(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
    
);

CREATE TABLE role(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary INT NOT NULL,
    team_id INT UNSIGNED NOT NULL,
    INDEX team_id (team_id),
    CONSTRAINT fk_team FOREIGN KEY (team_id)
    REFERENCES team(id) ON DELETE CASCADE 
);

CREATE TABLE employee(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT UNSIGNED NOT NULL,
    INDEX role_id (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id)
    REFERENCES role(id) ON DELETE CASCADE,
    INDEX manager_id (manager_id),
    CONSTRAINT fk_employee FOREIGN KEY (manager_id)
    REFERENCES employee(id) ON DELETE CASCADE
);

