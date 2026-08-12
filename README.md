# EduTrack — Student Management System

I built **EduTrack** as a simple Student Management System to practice frontend development, Java programming, and SQL.

The main idea behind this project was to create one small application where student information can be added, viewed, searched, edited, and deleted without making the interface complicated.

## Why I built this

While working on this project, I wanted to understand how the different parts of a management system work together.

For the frontend, I used JavaScript and Local Storage to manage student records.

For Java, I created a console-based version to practice object-oriented programming and `ArrayList`.

For MySQL, I created a database and practiced basic operations such as `INSERT`, `SELECT`, `UPDATE`, and `DELETE`.

## What the application can do

### Login

The application starts with a simple admin login.

```text
Username: admin
Password: admin123
```

After login, the user can access the dashboard.

### Dashboard

The dashboard gives a quick overview of the student records.

It shows:

* Total students
* Students by department
* Recently added students
* Quick links to add or view students

### Student Registration

The registration page collects:

* Student Name
* Email Address
* Phone Number
* Department
* Gender
* Date of Birth

I added validation so that incomplete or invalid information cannot be submitted.

For example:

```text
Email → must be in a valid format
Phone → exactly 10 digits
All fields → required
```

### Student List

After registration, the student information is saved in **Local Storage** and displayed on a separate Student List page.

From this page, the user can:

```text
Search → find a student by name
Edit   → update student details
Delete → remove a student
```

## How I organized the project

```text
Intern_Task/
│
├── index.html              # Login
├── dashboard.html          # Dashboard
├── student.html            # Student Registration
├── student-list.html       # Student List
│
├── css/
│   └── style.css           # Common styling
│
├── js/
│   └── app.js              # Validation and functionality
│
├── java/
│   └── StudentManagement.java
│
├── sql/
│   └── student_db.sql
│
└── README.md
```

## Technologies I used

**Frontend**

* HTML5
* CSS3
* Vanilla JavaScript

**Programming**

* Java

**Database**

* MySQL

## Java Version

The Java program is a console-based application with this menu:

```text
1. Add Student
2. View Students
3. Search Student
4. Exit
```

I used:

* Classes
* Objects
* Methods
* ArrayList
* Loops
* Conditional statements

## MySQL Version

The database is called:

```text
student_db
```

The main table is:

```text
students
```

It contains:

```text
id
name
email
phone
department
```

The SQL file includes examples of:

```sql
CREATE
INSERT
SELECT
UPDATE
DELETE
```

and a query to search students by department.

## How to run the project

### Frontend

Open the project in VS Code and run `index.html` using **Live Server**.

### Java

Open a terminal inside the `java` folder:

```bash
javac StudentManagement.java
java StudentManagement
```

### MySQL

Open `sql/student_db.sql` in MySQL Workbench and execute the queries.

## Project flow

```text
Login
  ↓
Dashboard
  ↓
Register Student
  ↓
Validate Details
  ↓
Save to Local Storage
  ↓
Student List
  ↓
Search / Edit / Delete
```

## What I learned from this project

This project helped me understand more than just writing individual programs.

I practiced how to:

* Design a simple user interface
* Validate user input with JavaScript
* Store and retrieve data using Local Storage
* Build CRUD functionality
* Work with Java classes and ArrayList
* Write SQL queries
* Organize a project into different files and folders
* Use Git and GitHub to manage and share a project

## Future improvements

There are several things I would like to add later, such as:

* Connecting the frontend to a real backend
* Connecting the application directly to MySQL
* Adding user registration
* Adding student profiles
* Adding attendance management
* Deploying the complete application online

## Author

**L Poojitha**

MCA Computer Science Student

**Project:** EduTrack — Student Management System
