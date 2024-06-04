CREATE DATABASE equipment_distribution_sys;
USE equipment_distribution_sys;

CREATE TABLE employees (
    id INT(11) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    nationalIdentity INT(14) NOT NULL,
    telephone INT(10) NOT NULL,
    department VARCHAR(20) NOT NULL,
    position VARCHAR(20) NOT NULL,
    laptopManufacturer VARCHAR(20) NOT NULL,
    laptopModel VARCHAR(20) NOT NULL,
    serialNumber VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userName VARCHAR(30) NOT NULL,
    password VARCHAR(20) NOT NULL
);


INSERT INTO employees (id, firstName, lastName, email, nationalIdentity, telephone, department, position, laptopManufacturer, laptopModel, serialNumber) VALUES
(1, 'John', 'Doe', 'john.doe@example.com', 12345678901, 1234567890, 'IT', 'Software Developer', 'Dell', 'Latitude 5400', '1234567890');

INSERT INTO users (userName, password) VALUES
('admin@gmail.com', 'admin');

