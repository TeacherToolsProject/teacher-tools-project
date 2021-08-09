const addAssignment = function() {
const container = document.querySelector(".container");
const addAssignmentDiv = document.createElement("div");
addAssignmentDiv.classList.add("add-assignment");
const addAssignmentHeader = document.createElement("h2");
addAssignmentHeader.innerText ="Add a new Assignment.";
const addAssignmentForm = document.createElement("form");
addAssignmentForm.classList.add("new-assignment-form");

const assignmentNameLabel = document.createElement("label");
assignmentNameLabel.innerText = "New Assignment Name: ";
const assignmentNameInput = document.createElement("input");
assignmentNameInput.classList.add("form-element");
assignmentNameInput.setAttribute("type", "text");

const assignmentDescriptionLabel = document.createElement("label");
assignmentDescriptionLabel.innerText = "New Assignment Description: ";
const assignmentDescriptionInput = document.createElement("input");
assignmentDescriptionInput.classList.add("form-element");
assignmentDescriptionInput.setAttribute("type", "text");

const assignmentDuedateLabel = document.createElement("label");
assignmentDuedateLabel.innerText = "New Assignment Due Date: ";
const assignmentDuedateInput = document.createElement("input");
assignmentDuedateInput.classList.add("form-element");
assignmentDuedateInput.setAttribute("type", "number");

const assignmentPointsWorthLabel = document.createElement("label");
assignmentPointsWorthLabel.innerText = "New Assignment Points Worth: ";
const assignmentPointsWorthInput = document.createElement("input");
assignmentPointsWorthInput.classList.add("form-element");
assignmentDescriptionInput.setAttribute("type", "number");

const assignmentClassroomLabel = document.createElement("label");
assignmentClassroomLabel.innerText = "New Assignemt Classroom: ";
const assignmentClassroomInput = document.createElement("input");
assignmentClassroomInput.classList.add("form-element");
assignmentClassroomInput.setAttribute("type", "text");

const addAssignmentButton = document.createElement("button");
addAssignmentButton.classList.add("form-element");
addAssignmentButton.innerText = "Add New Assignment";

addAssignmentButton.addEventListener("click", () => {
    const newAssignmentJson = {
        "name": assignmentNameInput.value,
        "description": assignmentDescriptionInput.value,
        "due date": assignmentDuedateInput.value,
        "points worth": assignmentPointsWorthInput.value,
        "classroom": assignmentClassroomInput.value
    }

    if (assignmentNameInput.value !== "" && assignmentDescriptionInput.value !== "" && assignmentDuedateInput.value >=2020 && assignmentPointsWorthInput.value >= 0 && assignmentClassroomInput.value !== ""){
        fetch("http://localhost:8080/api/single-student-template",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAssignmentJson)
})
.then(response => response.json())
.catch(error => console.log(error))
    }else{
        alert("All fields are required to Submit.")
    }
})

addAssignmentForm.appendChild(addAssignmentHeader);
addAssignmentForm.appendChild(assignmentNameLabel);
addAssignmentForm.appendChild(assignmentNameInput);
addAssignmentForm.appendChild(assignmentDescriptionLabel);
addAssignmentForm.appendChild(assignmentDescriptionInput);
addAssignmentForm.appendChild(assignmentDuedateLabel);
addAssignmentForm.appendChild(assignmentDuedateInput);
addAssignmentForm.appendChild(assignmentPointsWorthLabel);
addAssignmentForm.appendChild(assignmentPointsWorthInput);
addAssignmentForm.appendChild(assignmentClassroomLabel);
addAssignmentForm.appendChild(assignmentClassroomInput);
addAssignmentForm.appendChild(addAssignmentButton);

addStudentDiv.appendChild(addAssignmentForm);
container.appendChild(addAssignmentDiv);

}
addAssignment();