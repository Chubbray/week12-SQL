USE employeeTracker_db;

INSERT INTO department (name)
VALUES
("housing");

INSERT INTO role (title, salary, department_id)
VALUES
("leasing agent", 50000.00, 1),
(" ");

INSERT INTO employee (first_name, last_name, role_id, maneger_id)
VALUES
("John", "Doe", 1, 3);