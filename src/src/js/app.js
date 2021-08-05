import { addClassroom } from "./addClassroomForm.js";

fetch("http://localhost:8080/",{
    method: 'GET',
    headers: {
        'Accept':'application/json'
    }
})
.then(response => response.json())
.then(classrooms => addClassroom(classrooms))
.then(classroomElement => container.append(classroomElement))
.catch(error => console.log(error));