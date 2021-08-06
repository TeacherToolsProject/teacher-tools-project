    const addClassroom = function() {
    const container = document.querySelector(".container");
    const addClassroomDiv = document.createElement("div");
    addClassroomDiv.classList.add("add-classroom");
    const addClassroomHeader = document.createElement("h2");
    addClassroomHeader.innerText = "Add a new Classroom:";
    const addClassroomForm = document.createElement("form");
    addClassroomForm.classList.add("new-classroom-form");

    const subjectLabel = document.createElement("label");
    subjectLabel.innerText = "Subject: ";
    const subjectInput = document.createElement("input");
    subjectInput.classList.add("form-element");
    subjectInput.setAttribute("type", "text");

    const gradeLevelLabel = document.createElement("label");
    gradeLevelLabel.innerText = "Grade Level: ";
    const gradeLevelInput = document.createElement("input");
    gradeLevelInput.classList.add("form-element");
    gradeLevelInput.setAttribute("type", "number");

    const roomLabel = document.createElement("label");
    roomLabel.innerText = "Room: ";
    const roomInput = document.createElement("input");
    roomInput.classList.add("form-element");
    roomInput.setAttribute("type", "text");

    const timeLabel = document.createElement("label");
    timeLabel.innerText = "Time: ";
    const timeInput = document.createElement("input");
    timeInput.classList.add("form-element");
    timeInput.setAttribute("type", "text");

    const yearLabel = document.createElement("label");
    yearLabel.innerText = "Year: ";
    const yearInput = document.createElement("input");
    yearInput.classList.add("form-element");
    yearInput.setAttribute("type", "number");
    yearInput.setAttribute("min", "1900");
    yearInput.setAttribute("max", "2100");
    yearInput.setAttribute("step", "1");

    const semesterLabel = document.createElement("label");
    semesterLabel.innerText = "Semester: ";
    const semesterInput = document.createElement("input");
    semesterInput.classList.add("form-element");
    semesterInput.setAttribute("type", "text");

    const addClassroomButton = document.createElement("button");
    addClassroomButton.classList.add("form-element");
    addClassroomButton.innerText = "Add a new Classroom";

    addClassroomButton.addEventListener("click", () => {
        const newClassroomJson = {
            "subject" : subjectInput.value,
            "gradeLevel" : gradeLevelInput.value,
            "room" : roomInput.value,
            "time" : timeInput.value,
            "year" : yearInput.value,
            "semester" : semesterInput.value
        }

        if (subjectInput.value !== "" && gradeLevelInput.value !== "" && roomInput.value !== ""&& timeInput.value !== "" && yearInput.value !== "" && yearInput.value >=1900 && yearInput.value <=2100 && semesterInput.value !== "") {
            fetch("http://localhost:8080/api", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newClassroomJson)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
        } else {
            alert("All fields are required to Submit.")
        }
    })

    addClassroomForm.appendChild(addClassroomHeader);
    addClassroomForm.appendChild(subjectLabel);
    addClassroomForm.appendChild(subjectInput);
    addClassroomForm.appendChild(gradeLevelLabel);
    addClassroomForm.appendChild(gradeLevelInput);
    addClassroomForm.appendChild(roomLabel);
    addClassroomForm.appendChild(roomInput);
    addClassroomForm.appendChild(timeLabel);
    addClassroomForm.appendChild(timeInput);
    addClassroomForm.appendChild(yearLabel);
    addClassroomForm.appendChild(yearInput);
    addClassroomForm.appendChild(semesterLabel);
    addClassroomForm.appendChild(semesterInput);
    addClassroomForm.appendChild(addClassroomButton);

    addClassroomDiv.appendChild(addClassroomForm);
    container.appendChild(addClassroomDiv);

}
addClassroom();