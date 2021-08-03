package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Assignment;
import com.finalProject.teacherTools.Repos.AssignmentRepo;
import com.finalProject.teacherTools.Repos.StudentRepo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClassroomController {
    private StudentRepo studentRepo;
    private AssignmentRepo assignmentRepo;
    private ClassroomRepo classroomRepo;

    public ClassroomController (StudentRepo studentRepo, AssignmentRepo assignmentRepo, ClassroomRepo classroomRepo) {
        this.studentRepo = studentRepo;
        this.assignmentRepo = assignmentRepo;
        this.classroomRepo = classroomRepo;
    }
    
    @GetMapping ("home-page-template/classroom")
    public String displayClassroomPage (Model model) {
        model.addAttribute();_
    }
    
    
}
