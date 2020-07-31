USE employeeTracker_db;

INSERT INTO department (name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id)
VALUES
("Sales Lead", 100000.00, "Sales"),
("Salesperson", 80000.00, "Sales"),
("Lead Engineer", 150000.00, "Engineering"),
("Software Engineer", 120000.00, "Engineering"),
("Accountant", 125000.00, "Finace"),
("Legal Team Lead", 250000.00, "Legal"),
("Lawyer", 190000.00, "Legal");

INSERT INTO employee (first_name, last_name, role_id, maneger_id)
VALUES
("John", "Doe", 1, 3),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, null),
("Kevin", "Tupik", 4, 3),
("Malia", "Brown", 6, null),
("Sarah", "Lourd", 7, null),
("Tom", "Galal", 8, 7),
("Christian", "Eckenrode", 9, 2);