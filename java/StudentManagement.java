import java.util.ArrayList;
import java.util.Scanner;

class Student {

    int id;
    String name;
    String email;
    String phone;
    String department;

    Student(
            int id,
            String name,
            String email,
            String phone,
            String department) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.department = department;
    }

    void display() {

        System.out.println(
            "ID: " + id +
            " | Name: " + name +
            " | Email: " + email +
            " | Phone: " + phone +
            " | Department: " + department
        );

    }
}


public class StudentManagement {

    static ArrayList<Student> students =
            new ArrayList<>();

    static Scanner scanner =
            new Scanner(System.in);

    static int nextId = 1;


    static void addStudent() {

        System.out.println("\n--- Add Student ---");

        System.out.print("Name: ");
        String name = scanner.nextLine();

        System.out.print("Email: ");
        String email = scanner.nextLine();

        System.out.print("Phone: ");
        String phone = scanner.nextLine();

        System.out.print("Department: ");
        String department = scanner.nextLine();


        Student student =
                new Student(
                    nextId++,
                    name,
                    email,
                    phone,
                    department
                );


        students.add(student);

        System.out.println(
            "Student added successfully."
        );
    }


    static void viewStudents() {

        System.out.println("\n--- All Students ---");


        if (students.isEmpty()) {

            System.out.println(
                "No students found."
            );

            return;
        }


        for (Student student : students) {
            student.display();
        }
    }


    static void searchStudent() {

        System.out.print(
            "\nEnter student name to search: "
        );

        String search =
                scanner.nextLine()
                        .toLowerCase();


        boolean found = false;


        for (Student student : students) {

            if (
                student.name
                    .toLowerCase()
                    .contains(search)
            ) {

                student.display();

                found = true;
            }
        }


        if (!found) {

            System.out.println(
                "Student not found."
            );

        }
    }


    public static void main(String[] args) {

        int choice;


        do {

            System.out.println(
                "\n=============================="
            );

            System.out.println(
                "       EDUTRACK SYSTEM"
            );

            System.out.println(
                "=============================="
            );

            System.out.println(
                "1. Add Student"
            );

            System.out.println(
                "2. View Students"
            );

            System.out.println(
                "3. Search Student"
            );

            System.out.println(
                "4. Exit"
            );

            System.out.println(
                "=============================="
            );

            System.out.print(
                "Enter choice: "
            );


            choice =
                    scanner.nextInt();

            scanner.nextLine();


            switch (choice) {

                case 1:
                    addStudent();
                    break;

                case 2:
                    viewStudents();
                    break;

                case 3:
                    searchStudent();
                    break;

                case 4:
                    System.out.println(
                        "Thank you for using EduTrack."
                    );
                    break;

                default:
                    System.out.println(
                        "Invalid choice."
                    );
            }


        } while (choice != 4);


        scanner.close();

    }
}