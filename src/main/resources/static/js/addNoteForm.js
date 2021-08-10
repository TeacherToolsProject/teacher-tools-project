// const addNote = function() {
//     const container = document.querySelector(".container");
//     const addNoteDiv = document.createElement("div");
//     addNoteDiv.classList.add("add-note");
//     const addNoteHeader = document.createElement("h2");
//     addNoteHeader.innerText = "Leave a note to this Student:";
//     const addNoteForm = document.createElement("form");
//     addNoteForm.classList.add("new-note-form");

//     const titleLabel = document.createElement("label");
//     titleLabel.innerText = "Note Title: ";
//     const titleInput = document.createElement("input");
//     titleInput.classList.add("form-element");
//     titleInput.setAttribute("type", "text");

//     const noteDateLabel = document.createElement("label");
//     noteDateLabel.innerText = "Note Date: ";
//     const noteDateInput = document.createElement("input");
//     noteDateInput.classList.add("form-element");
//     noteDateInput.setAttribute("type", "text");

//     const noteCommentLabel = document.createElement("label");
//     noteCommentLabel.innerText = "Comments Here: ";
//     const noteCommentInput = document.createElement("textarea");
//     noteCommentInput.classList.add("form-element");
//     noteCommentInput.setAttribute("rows", "6");

//     const addNoteButton = document.createElement("button");
//     addNoteButton.classList.add("form-element");
//     addNoteButton.innerText = "Add Your Note(s)";

//     addNoteButton.addEventListener("click", () => {
//         const newNoteJson = {
//             "title" : titleInput.value,
//             "noteDate" : noteDateInput.value,
//             "note" : noteCommentInput.value
//         }

//         if (titleInput.value !== "" && noteDateInput.value !== "" && noteCommentInput.value !== "") {
//             const studentId = document.getElementById("StudentId").innerText;
//             fetch("http://localhost:8080/api/student?id=" + studentId, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(newNoteJson)
//             })
//             .then(response => response.json())
//             .catch(error => console.log(error))
//         } else {
//             alert("All fields are required to Submit.")
//         }
//         // window.location.reload();
//     })

//     addNoteForm.appendChild(addNoteHeader);
//     addNoteForm.appendChild(titleLabel);
//     addNoteForm.appendChild(titleInput);
//     addNoteForm.appendChild(noteDateLabel);
//     addNoteForm.appendChild(noteDateInput);
//     addNoteForm.appendChild(noteCommentLabel);
//     addNoteForm.appendChild(noteCommentInput);
//     addNoteForm.appendChild(addNoteButton);

//     addNoteDiv.appendChild(addNoteForm);
//     container.appendChild(addNoteDiv);

// }
// addNote();