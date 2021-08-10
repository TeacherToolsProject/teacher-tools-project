const addAssignmentToClass = function() {
    const container = document.querySelector(".container");
    const addAssignmentToClassDiv = document.createElement("div");
    addAssignmentToClassDiv.classList.add("add-assignment");
    const addAssignmentToClassHeader = document.createElement("h2");
    addAssignmentToClassHeader.innerText = "Add A New Assignment:";
    const addAssignmentToClassForm = document.createElement("form");
    addAssignmentToClassForm.classList.add("new-assignment-form");

    const newAssignmentLabel = document.createElement("label");
    newAssignmentLabel.innerText = "Assignment Name: ";
    const newAssignmentInput = document.createElement("input");
    newAssignmentInput.classList.add("form-element");
    newAssignmentInput.setAttribute("type", "text");

    const newAssignmentDescriptionLabel = document.createElement("label");
    newAssignmentDescriptionLabel.innerText = "Assignment Description: ";
    const newAssignmentDescriptionInput = document.createElement("input");
    newAssignmentDescriptionInput.classList.add("form-element");
    newAssignmentDescriptionInput.setAttribute("type", "text");

    const newAssignmentDueDateLabel = document.createElement("label");
    newAssignmentDueDateLabel.innerText = "Assignment Due Date: ";
    const newAssignmentDueDateInput = document.createElement("input");
    newAssignmentDueDateInput.classList.add("form-element");
    newAssignmentDueDateInput.setAttribute("type", "text");

    const assignmentPointsValueLabel = document.createElement("label");
    assignmentPointsValueLabel.innerText = "Assignment Points Value: ";
    const assignmentPointsValueInput = document.createElement("input");
    assignmentPointsValueInput.classList.add("form-element");
    assignmentPointsValueInput.setAttribute("type", "number");

    const newAssignmentClassroomLabel = document.createElement("label");
    newAssignmentClassroomLabel.innerText = "New Assignment Classroom: ";
    const newAssignmentClassroomInput = document.createElement("input");
    newAssignmentClassroomInput.classList.add("form-element");
    newAssignmentClassroomInput.setAttribute("type", "text");

    
    
    
    
    
    
    
    
    
    const addAssignmentToClassButton = document.createElement("button");
    addAssignmentToClassButton.classList.add("form-element");
    addAssignmentToClassButton.innerText = "Add A New Assignment";

    addAssignmentToClassButton.addEventListener("click", () => {
        const newAssignmentJson = {
            "newAssignment" : newAssignmentInput.value,
            "newAssignmentDescription" : newAssignmentDescriptionInput.value,
            "newAssignmentDueDate" : newAssignmentDueDateInput.value,
            "assignmentPointsValue" : assignmentPointsValueInput.value,
            "newAssignmentClassroom" : newAssignmentClassroomInput.value,

        }

        if (newAssignmentInput.value !== "" && newAssignmentDescriptionInput.value !== "" && newAssignmentDueDateInput.value >=2020 && assignmentPointsValueInput.value >=0 && newAssignmentClassroomInput.value !== "") {
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
    addAssignmentToClassForm.appendChild(newAssignmentLabel);
    addAssignmentToClassForm.appendChild(newAssignmentInput);
    addAssignmentToClassForm.appendChild(newAssignmentDescriptionLabel);
    addAssignmentToClassForm.appendChild(newAssignmentDescriptionInput);
    addAssignmentToClassForm.appendChild(newAssignmentDueDateLabel);
    addAssignmentToClassForm.appendChild(newAssignmentDueDateInput);
    addAssignmentToClassForm.appendChild(assignmentPointsValueLabel);
    addAssignmentToClassForm.appendChild(assignmentPointsValueInput);
    addAssignmentToClassForm.appendChild(newAssignmentClassroomLabel);
    addAssignmentToClassForm.appendChild(newAssignmentClassroomInput);
    

    addAssignmentToClassForm.appendChild(addAssignmentToClassButton);

    addAssignmentToClassDiv.appendChild(addAssignmentToClassForm);
    container.appendChild(addAssignmentToClassDiv);

}
addAssignmentToClass();