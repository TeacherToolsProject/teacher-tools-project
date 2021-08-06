const addStudent = function () {
    const container = document.querySelector(".container");
    const addStudentDiv = document.createElement("div");
    addStudentDiv.classList.add("add-student");
    const addStudentHeader = document.createElement("h2");
    addStudentHeader.innerText = "Add a new student:";
    const addStudentForm = document.createElement("form");
    addStudentForm.classList.add("new-student-form");

    const nameLabel = document.createElement("label");
    nameLabel.innerText = "Student's Name: ";
    const nameInput = document.createElement("input");
    nameInput.classList.add("form-element");
    nameInput.setAttribute("type", "text");

    const studentImageLabel = document.createElement("label");
    studentImageLabel.innerText = "Picture: ";
    const studentImageInput = document.createElement("input");
    studentImageInput.classList.add("form-element");
    studentImageInput.setAttribute("type", "text");

    const guardianNameLabel = document.createElement("label");
    guardianNameLabel.innerText = "Guardian Name: ";
    const guardianNameInput = document.createElement("input");
    guardianNameInput.classList.add("form-element");
    guardianNameInput.setAttribute("type", "text");

    const guardianEmailLabel = document.createElement("label");
    guardianEmailLabel.innerText = "Guardian Email: ";
    const guardianEmailInput = document.createElement("input");
    guardianEmailInput.classList.add("form-element");
    guardianEmailInput.setAttribute("type", "text");

    const guardianPhoneLabel = document.createElement("label");
    guardianPhoneLabel.innerText = "Guardian Phone: ";
    const guardianPhoneInput = document.createElement("input");
    guardianPhoneInput.classList.add("form-element");
    guardianPhoneInput.setAttribute("type", "text");

    const birthdayDayLabel = document.createElement("label");
    birthdayDayLabel.innerText = "Birthday Day: ";
    const birthdayDayInput = document.createElement("input");
    birthdayDayInput.classList.add("form-element");
    birthdayDayInput.setAttribute("type", "number");

    const birthdayMonthLabel = document.createElement("label");
    birthdayMonthLabel.innerText = "Birthday Month: ";
    const birthdayMonthInput = document.createElement("input");
    birthdayMonthInput.classList.add("form-element");
    birthdayMonthInput.setAttribute("type", "number");

    const birthdayYearLabel = document.createElement("label");
    birthdayYearLabel.innerText = "Birthday Year: ";
    const birthdayYearInput = document.createElement("input");
    birthdayYearInput.classList.add("form-element");
    birthdayYearInput.setAttribute("type", "number");

    const addStudentButton = document.createElement("button");
    addStudentButton.classList.add("form-element");
    addStudentButton.innerText = "Add a new Student";

    addStudentButton.addEventListener("click", () => {
        const newStudentJson = {
            "name": nameInput.value,
            "studentImage": studentImageInput.value,
            "guardianName": guardianNameInput.value,
            "guardianEmail": guardianEmailInput.value,
            "guardianPhone": guardianPhoneInput.value,
            "birthdayDay": birthdayDayInput.value,
            "birthdayMonth": birthdayMonthInput.value,
            "birthdayYear": birthdayYearInput.value
        }

        if (studentImageInput.value !== "" && guardianNameInput.value !== "" && guardianEmailInput.value !== "" && guardianPhoneInput.value !== "" && birthdayDayInput.value !== "" && birthdayMonthInput.value !== "" && birthdayYearInput.value !== "") {
            fetch("http://localhost:8080/api/students", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newStudentJson)
                })
                .then(response => response.json())
                .catch(error => console.log(error))
        } else {
            alert("All fields are required to Submit.")
        }
    })

    addStudentForm.appendChild(addStudentHeader);
    addStudentForm.appendChild(nameLabel);
    addStudentForm.appendChild(nameInput);
    addStudentForm.appendChild(studentImageLabel);
    addStudentForm.appendChild(studentImageInput);
    addStudentForm.appendChild(guardianNameLabel);
    addStudentForm.appendChild(guardianNameInput);
    addStudentForm.appendChild(guardianEmailLabel);
    addStudentForm.appendChild(guardianEmailInput);
    addStudentForm.appendChild(guardianPhoneLabel);
    addStudentForm.appendChild(guardianPhoneInput);
    addStudentForm.appendChild(birthdayDayLabel);
    addStudentForm.appendChild(birthdayDayInput);
    addStudentForm.appendChild(birthdayMonthLabel);
    addStudentForm.appendChild(birthdayMonthInput);
    addStudentForm.appendChild(birthdayYearLabel);
    addStudentForm.appendChild(birthdayYearInput);
    addStudentForm.appendChild(addStudentButton);

    addStudentDiv.appendChild(addStudentForm);
    container.appendChild(addStudentDiv);

}
addStudent();