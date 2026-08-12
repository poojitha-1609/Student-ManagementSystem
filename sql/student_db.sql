CREATE DATABASE IF NOT EXISTS student_db;

USE student_db;


CREATE TABLE IF NOT EXISTS students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    department VARCHAR(100) NOT NULL
);


INSERT INTO students
(name, email, phone, department)
VALUES
(
    'Poojitha',
    'poojitha@gmail.com',
    '9876543210',
    'Computer Science'
),
(
    'Ananya',
    'ananya@gmail.com',
    '9876543211',
    'Information Technology'
),
(
    'Rahul',
    'rahul@gmail.com',
    '9876543212',
    'Electronics'
),
(
    'Sneha',
    'sneha@gmail.com',
    '9876543213',
    'Mechanical'
),
(
    'Arjun',
    'arjun@gmail.com',
    '9876543214',
    'Management'
);


-- Display all students
SELECT * FROM students;


-- Search students by department
SELECT *
FROM students
WHERE department = 'Computer Science';


-- Update phone number
UPDATE students
SET phone = '9999999999'
WHERE id = 1;


-- Delete a student
DELETE FROM students
WHERE id = 5;


-- Display final records
SELECT * FROM students;