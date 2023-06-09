DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Table schemas
CREATE TABLE Department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES Department(id)
);

CREATE TABLE Employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (manager_id) REFERENCES Employee(id)
);

-- Seed data
INSERT INTO Department (name)
VALUES  ('Finance'),
        ('Technology'),
        ('Floor');

INSERT INTO Role (title, salary, department_id)
VALUES  ('Chief Financial Officer', 428169.00, 1),
        ('Financial Analyst', 95570.00, 1),
        ('Financial Advisor', 94170.00, 1),
        ('Accountant', 77250.00, 1),
        ('Senior Developer', 102876.00, 2),
        ('Junior Developer', 83876.00, 2),
        ('Registered Nurse', 82750.00, 3),
        ('Certified Nurse Assistant', 34287.00, 3);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES  ('Callie', 'Bridges', 1, null),
        ('Bella', 'Faulkner', 2, 1),
        ('Anne', 'Montgomery', 3, 1),
        ('Bruce', 'Rios', 4, 2),
        ('Steven', 'Jacobs', 4, 2),
        ('Jonathan', 'McClain', 4, 2),
        ('Ben', 'Cordova', 5, null),
        ('Emelia', 'Whitney', 6, 7),
        ('Magnus', 'Evans', 6, 7),
        ('Bernard', 'Hoover', 7, null),
        ('Hallie', 'Camacho', 8, 10),
        ('Oliwier', 'Trujillo', 8, 10);


SELECT * FROM Department;
SELECT * FROM Role;
SELECT * FROM Employee;