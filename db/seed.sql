use nba_rosters;

INSERT INTO team 
    (name) 
VALUES 
    ('Pacers'),
    ('Lakers'),
    ('Nuggets');

INSERT INTO role
    (title, team_id)
VALUES 
    ('Guard', 1),
    ('Center', 1),
    ('Forward', 1),
    ('Coach', 1),
    ('Guard', 2),
    ('Center', 2),
    ('Forward', 2),
    ('Coach', 2),
    ('Guard', 3),
    ('Center', 3),
    ('Forward', 3),
    ('Coach', 3);

INSERT INTO employee
    (first_name, last_name, salary, role_id, manager_id)
VALUES
    ('Victor', 'Oladipo',21000000, 1, 1),
    ('Domas', 'Sabonis', 20000000, 2, 1),
    ('T.J.', 'Warren', 10500000, 3, 1),
    ('Mike', 'DAntoni?', 4000000, 4, 2),
    ('J.R.', 'Smith', 300000, 1, 3),
    ('Anthony', 'Davis', 25500000, 2, 3),
    ('LeBron', 'James', 38000000, 3, 3),
    ('Frank', 'Vogel', 4000000, 4, 4),
    ('Jamal', 'Murray', 4500000, 1, 5),
    ('Nikola', 'Jokic', 26000000, 2, 5),
    ('Michael', 'Porter Jr.', 3300000, 3, 5),
    ('Mike', 'Malone', 2500000, 4, 6);

