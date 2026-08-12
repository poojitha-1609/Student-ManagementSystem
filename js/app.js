document.addEventListener("DOMContentLoaded", function () {

    const page = window.location.pathname.split("/").pop();


    /* =========================
       LOGIN
    ========================= */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            const usernameError =
                document.getElementById("usernameError");

            const passwordError =
                document.getElementById("passwordError");

            usernameError.textContent = "";
            passwordError.textContent = "";

            let valid = true;

            if (username === "") {
                usernameError.textContent = "Username is required.";
                valid = false;
            }

            if (password === "") {
                passwordError.textContent = "Password is required.";
                valid = false;
            }

            if (!valid) {
                return;
            }

            if (username === "admin" && password === "admin123") {

                localStorage.setItem("loggedIn", "true");

                window.location.href = "dashboard.html";

            } else {

                passwordError.textContent =
                    "Invalid username or password.";

            }

        });
    }


    /* =========================
       PROTECT INTERNAL PAGES
    ========================= */

    const protectedPages = [
        "dashboard.html",
        "student.html",
        "student-list.html"
    ];

    if (
        protectedPages.includes(page) &&
        localStorage.getItem("loggedIn") !== "true"
    ) {
        window.location.href = "index.html";
        return;
    }


    /* =========================
       LOGOUT
    ========================= */

    window.logout = function () {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("editStudentId");

        window.location.href = "index.html";
    };


    /* =========================
       STORAGE FUNCTIONS
    ========================= */

    function getStudents() {

        return JSON.parse(
            localStorage.getItem("students")
        ) || [];

    }


    function saveStudents(students) {

        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );

    }


    /* =========================
       REGISTRATION
    ========================= */

    const studentForm =
        document.getElementById("studentForm");


    if (studentForm) {

        loadStudentForEdit();


        studentForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById(
                        "studentName"
                    ).value.trim();


                const email =
                    document.getElementById(
                        "email"
                    ).value.trim();


                const phone =
                    document.getElementById(
                        "phone"
                    ).value.trim();


                const department =
                    document.getElementById(
                        "department"
                    ).value;


                const dob =
                    document.getElementById(
                        "dob"
                    ).value;


                const genderElement =
                    document.querySelector(
                        'input[name="gender"]:checked'
                    );


                const gender =
                    genderElement
                        ? genderElement.value
                        : "";


                clearErrors();


                if (
                    !validateForm(
                        name,
                        email,
                        phone,
                        department,
                        gender,
                        dob
                    )
                ) {
                    return;
                }


                let students = getStudents();


                const editId =
                    localStorage.getItem(
                        "editStudentId"
                    );


                if (editId) {

                    const index =
                        students.findIndex(
                            student =>
                                student.id === Number(editId)
                        );


                    if (index !== -1) {

                        students[index] = {

                            id: Number(editId),

                            name: name,

                            email: email,

                            phone: phone,

                            department: department,

                            gender: gender,

                            dob: dob

                        };

                    }


                    localStorage.removeItem(
                        "editStudentId"
                    );


                    saveStudents(students);


                    alert(
                        "Student updated successfully!"
                    );

                } else {

                    const newId =
                        students.length
                            ? Math.max(
                                ...students.map(
                                    student => student.id
                                )
                            ) + 1
                            : 1;


                    students.push({

                        id: newId,

                        name: name,

                        email: email,

                        phone: phone,

                        department: department,

                        gender: gender,

                        dob: dob

                    });


                    saveStudents(students);


                    alert(
                        "Student registered successfully!"
                    );
                }


                studentForm.reset();


                window.location.href =
                    "student-list.html";

            }
        );

    }


    /* =========================
       VALIDATION
    ========================= */

    function validateForm(
        name,
        email,
        phone,
        department,
        gender,
        dob
    ) {

        let valid = true;


        if (name === "") {

            document.getElementById(
                "studentNameError"
            ).textContent =
                "Student name is required.";

            valid = false;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email === "") {

            document.getElementById(
                "emailError"
            ).textContent =
                "Email is required.";

            valid = false;

        } else if (!emailPattern.test(email)) {

            document.getElementById(
                "emailError"
            ).textContent =
                "Enter a valid email address.";

            valid = false;
        }


        const phonePattern =
            /^\d{10}$/;


        if (phone === "") {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number is required.";

            valid = false;

        } else if (!phonePattern.test(phone)) {

            document.getElementById(
                "phoneError"
            ).textContent =
                "Phone number must contain exactly 10 digits.";

            valid = false;
        }


        if (department === "") {

            document.getElementById(
                "departmentError"
            ).textContent =
                "Please select a department.";

            valid = false;
        }


        if (gender === "") {

            document.getElementById(
                "genderError"
            ).textContent =
                "Please select gender.";

            valid = false;
        }


        if (dob === "") {

            document.getElementById(
                "dobError"
            ).textContent =
                "Date of birth is required.";

            valid = false;
        }


        return valid;

    }


    function clearErrors() {

        const errors = [
            "studentNameError",
            "emailError",
            "phoneError",
            "departmentError",
            "genderError",
            "dobError"
        ];


        errors.forEach(function (id) {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent = "";
            }

        });

    }


    /* =========================
       LOAD EDIT STUDENT
    ========================= */

    function loadStudentForEdit() {

        const editId =
            localStorage.getItem(
                "editStudentId"
            );


        if (!editId) {
            return;
        }


        const students = getStudents();


        const student =
            students.find(
                item =>
                    item.id === Number(editId)
            );


        if (!student) {
            return;
        }


        document.getElementById(
            "studentName"
        ).value = student.name;


        document.getElementById(
            "email"
        ).value = student.email;


        document.getElementById(
            "phone"
        ).value = student.phone;


        document.getElementById(
            "department"
        ).value = student.department;


        document.getElementById(
            "dob"
        ).value = student.dob;


        const gender =
            document.querySelector(
                `input[name="gender"][value="${student.gender}"]`
            );


        if (gender) {
            gender.checked = true;
        }


        const title =
            document.getElementById(
                "formTitle"
            );

        const button =
            document.getElementById(
                "submitButton"
            );


        if (title) {
            title.textContent = "Edit Student";
        }


        if (button) {
            button.textContent = "Update Student";
        }

    }


    /* =========================
       STUDENT LIST
    ========================= */

    const studentTableBody =
        document.getElementById(
            "studentTableBody"
        );


    if (studentTableBody) {

        displayStudents();


        const searchInput =
            document.getElementById(
                "searchStudent"
            );


        searchInput.addEventListener(
            "input",
            function () {

                displayStudents(
                    this.value.trim()
                );

            }
        );

    }


    function displayStudents(search = "") {

        const students =
            getStudents();


        const filtered =
            students.filter(
                student =>
                    student.name
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )
            );


        studentTableBody.innerHTML = "";


        const empty =
            document.getElementById(
                "emptyMessage"
            );


        const count =
            document.getElementById(
                "studentCount"
            );


        if (count) {

            count.textContent =
                `${filtered.length} student${filtered.length === 1 ? "" : "s"}`;

        }


        if (filtered.length === 0) {

            empty.style.display = "block";

            return;

        }


        empty.style.display = "none";


        filtered.forEach(function (student) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${student.id}</td>

                <td><strong>${student.name}</strong></td>

                <td>${student.email}</td>

                <td>${student.phone}</td>

                <td>${student.department}</td>

                <td>${student.gender}</td>

                <td>${student.dob}</td>

                <td>
                    <button
                        class="action-btn edit-btn"
                        onclick="editStudent(${student.id})"
                    >
                        Edit
                    </button>

                    <button
                        class="action-btn delete-btn"
                        onclick="deleteStudent(${student.id})"
                    >
                        Delete
                    </button>
                </td>

            `;


            studentTableBody.appendChild(row);

        });

    }


    /* =========================
       EDIT
    ========================= */

    window.editStudent = function (id) {

        localStorage.setItem(
            "editStudentId",
            id
        );


        window.location.href =
            "student.html";

    };


    /* =========================
       DELETE
    ========================= */

    window.deleteStudent = function (id) {

        const confirmDelete =
            confirm(
                "Are you sure you want to delete this student?"
            );


        if (!confirmDelete) {
            return;
        }


        let students =
            getStudents();


        students =
            students.filter(
                student =>
                    student.id !== id
            );


        saveStudents(students);


        displayStudents();

    };


    /* =========================
       DASHBOARD
    ========================= */

    updateDashboard();


    function updateDashboard() {

        const students =
            getStudents();


        const total =
            document.getElementById(
                "totalStudents"
            );


        if (!total) {
            return;
        }


        const cs =
            students.filter(
                student =>
                    student.department ===
                    "Computer Science"
            ).length;


        const engineering =
            students.filter(
                student =>
                    student.department === "Electronics" ||
                    student.department === "Mechanical"
            ).length;


        const management =
            students.filter(
                student =>
                    student.department === "Management"
            ).length;


        document.getElementById(
            "totalStudents"
        ).textContent = students.length;


        document.getElementById(
            "csStudents"
        ).textContent = cs;


        document.getElementById(
            "engineeringStudents"
        ).textContent = engineering;


        document.getElementById(
            "managementStudents"
        ).textContent = management;


        const recent =
            document.getElementById(
                "recentStudents"
            );


        const empty =
            document.getElementById(
                "dashboardEmpty"
            );


        if (!recent) {
            return;
        }


        recent.innerHTML = "";


        const latest =
            students
                .slice(-5)
                .reverse();


        if (latest.length === 0) {

            empty.style.display = "block";

            return;

        }


        empty.style.display = "none";


        latest.forEach(function (student) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${student.name}</td>

                <td>${student.email}</td>

                <td>${student.department}</td>

                <td>${student.gender}</td>

            `;


            recent.appendChild(row);

        });

    }

});