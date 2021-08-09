document.getElementById("student-list").addEventListener("click",function(student){
    let targetStudent = student.target;
    if(targetStudent.tagName.toUpperCase()==="LI"){
        targetStudent.style.opacity = '0';
        setTimeout(function(){targetStudent.parentNode.removeChild(targetStudent);}, 1000);
    }
});

// function removeStudent(){
//     let presentStudent = document.querySelectorAll("roll-student");
//     presentStudent.style.opacity = '0';
//     setTimeout(function(){presentStudent.remove();}, 1000);
// }
