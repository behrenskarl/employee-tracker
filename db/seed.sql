use nba_rosters;

INSERT INTO team 
    (name) 
VALUES 
    ('Pacers'),
    ('Lakers'),
    ('Nuggets');

INSERT INTO role
    (title, salary, team_id)
VALUES 
    -- ('Pacers Shooting Guard', 21000000, 1),
    -- ('Pacers Center', 20000000, 1),
    -- ('Pacers Small Forward', 10500000, 1),
    -- ('Pacers Coach', 4000000, 1),
    -- ('Lakers Shooting Guard', 300000, 2),
    -- ('Lakers Center', 25500000, 2),
    -- ('Lakers Small Forward', 38000000, 2),
    -- ('Lakers Coach', 4000000, 2),
    -- ('Nuggets Point Guard', 4500000, 3),
    -- ('Nuggets Center', 26000000, 3),
    -- ('Nuggets Small Forward', 3300000, 3),
    -- ('Nuggets Coach', 2500000, 3);

    ('Guard', 21000000, 1),
    ('Center', 20000000, 1),
    ('Forward', 10500000, 1),
    ('Coach', 4000000, 1),
    ('Guard', 300000, 2),
    ('Center', 25500000, 2),
    ('Forward', 38000000, 2),
    ('Coach', 4000000, 2),
    ('Guard', 4500000, 3),
    ('Center', 26000000, 3),
    ('Forward', 3300000, 3),
    ('Coach', 2500000, 3);
    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Victor', 'Oladipo', 1, 1),
    ('Domas', 'Sabonis', 2, 1),
    ('T.J.', 'Warren', 3, 1),
    ('Mike', 'DAntoni?', 4, 2),
    ('J.R.', 'Smith', 1, 3),
    ('Anthony', 'Davis', 2, 3),
    ('LeBron', 'James', 3, 3),
    ('Frank', 'Vogel', 4, 4),
    ('Jamal', 'Murray', 1, 5),
    ('Nikola', 'Jokic', 2, 5),
    ('Michael', 'Porter Jr.', 3, 5),
    ('Mike', 'Malone', 4, 6);