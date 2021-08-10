const addAssignmentToClass = function() {
    const container = document.querySelector(".container");
    const addAssignmentToClassDiv = document.createElement("div");
    addAssignmentToClassDiv.classList.add("add-assignment");
    const addAssignmentToClassHeader = document.createElement("h2");
    addAssignmentToClassHeader.innerText = "Add A New Assignment:";
    const addAssignmentToClassForm = document.createElement("form");
    addAssignmentToClassForm.classList.add("new-assignment-form");

    const newAssignmentClassroomLabel = document.createElement("label");
    newAssignmentClassroomLabel.innerText = "Classroom to Which Assignment is Assigned: ";
    const newAssignmentClassroomInput = document.createElement("input");
    newAssignmentClassroomInput.classList.add("form-element");
    newAssignmentClassroomInput.setAttribute("type", "text");

    const newAssignmentLabel = document.createElement("label");
    newAssignmentLabel.innerText = "Assignment Name: ";
    const newAssignmentInput = document.createElement("input");
    newAssignmentInput.classList.add("form-element");
    newAssignmentInput.setAttribute("type", "text");

    const newAssignmentDescriptionLabel = document.createElement("label");
    newAssignmentDescriptionLabel.innerText = "Description: ";
    const newAssignmentDescriptionInput = document.createElement("input");
    newAssignmentDescriptionInput.classList.add("form-element");
    newAssignmentDescriptionInput.setAttribute("type", "text");

    const newAssignmentAssignedDateLabel = document.createElement("label");
    newAssignmentAssignedDateLabel.innerText = "Assigned Date: ";
    const newAssignmentAssignedDateInput = document.createElement("input");
    newAssignmentAssignedDateInput.classList.add("form-element");
    newAssignmentAssignedDateInput.setAttribute("type", "text");

    const newAssignmentDueDateLabel = document.createElement("label");
    newAssignmentDueDateLabel.innerText = "Due Date: ";
    const newAssignmentDueDateInput = document.createElement("input");
    newAssignmentDueDateInput.classList.add("form-element");
    newAssignmentDueDateInput.setAttribute("type", "text");

    const assignmentPointsValueLabel = document.createElement("label");
    assignmentPointsValueLabel.innerText = "Points Value: ";
    const assignmentPointsValueInput = document.createElement("input");
    assignmentPointsValueInput.classList.add("form-element");
    assignmentPointsValueInput.setAttribute("type", "text");

    const addAssignmentToClassButton = document.createElement("button");
    addAssignmentToClassButton.classList.add("form-element");
    addAssignmentToClassButton.innerText = "Add A New Assignment";

    addAssignmentToClassButton.addEventListener("click", () => {
        const newAssignmentJson = {
            "newAssignment" : newAssignmentInput.value,
            "newAssignmentDescription" : newAssignmentDescriptionInput.value,
            "newAssignmentAssignedDate" : newAssignmentAssignedDateInput.value,
            "newAssignmentDueDate" : newAssignmentDueDateInput.value,
            "assignmentPointsValue" : assignmentPointsValueInput.value,
            "newAssignmentClassroom" : newAssignmentClassroomInput.value,
        }

        //not sure about the fetch
        if (newAssignmentInput.value !== "" 
        && newAssignmentDescriptionInput.value !== ""
        && newAssignmentAssignedDateInput.value !== "" 
        && newAssignmentDueDateInput.value !== "" 
        && assignmentPointsValueInput.value !== "" 
        && newAssignmentClassroomInput.value !== "") {
            fetch("http://localhost:8080/api/newAssignment",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAssignmentJson)
            })
            .then(response => response.json())
            .catch(error => console.log(error))
        } else {
            alert("All fields are required to Submit.")
        }
    })

    addAssignmentToClassForm.appendChild(addAssignmentToClassHeader);
    addAssignmentToClassForm.appendChild(newAssignmentClassroomLabel);
    addAssignmentToClassForm.appendChild(newAssignmentClassroomInput);

    addAssignmentToClassForm.appendChild(newAssignmentLabel);
    addAssignmentToClassForm.appendChild(newAssignmentInput);
    addAssignmentToClassForm.appendChild(newAssignmentDescriptionLabel);
    addAssignmentToClassForm.appendChild(newAssignmentDescriptionInput);
    addAssignmentToClassForm.appendChild(newAssignmentAssignedDateLabel);
    addAssignmentToClassForm.appendChild(newAssignmentAssignedDateInput);
    addAssignmentToClassForm.appendChild(newAssignmentDueDateLabel);
    addAssignmentToClassForm.appendChild(newAssignmentDueDateInput);
    addAssignmentToClassForm.appendChild(assignmentPointsValueLabel);
    addAssignmentToClassForm.appendChild(assignmentPointsValueInput);
    

    addAssignmentToClassForm.appendChild(addAssignmentToClassButton);

    addAssignmentToClassDiv.appendChild(addAssignmentToClassForm);
    container.appendChild(addAssignmentToClassDiv);

}
addAssignmentToClass();


// Assignment apHistoryOneFirstAssignment = new Assignment(
    // apHistoryOne, 
    // "Favorite Ancient Civilization", 
    // "Write a one page paper detailing your favorite ancient civilization, where it was located, what tools they used, what languages they spoke, and any interesting achievements or conflicts they were involved in.",
    //  "08/28/2021", 
    //  "09/02/2021", 
    //  "100";

                // private String name;
                // private String description;

                // private String assignedDate;
                // private String dueDate;
                // private String pointsValue;

                // How do we dela with the classroom?
                
                // 1. all variables are Strings

            