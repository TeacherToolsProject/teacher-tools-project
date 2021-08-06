package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Assignment;
import com.finalProject.teacherTools.Models.Classroom;
import com.finalProject.teacherTools.Models.Student;
import com.finalProject.teacherTools.Repos.AssignmentRepo;
import com.finalProject.teacherTools.Repos.ClassroomRepo;
import com.finalProject.teacherTools.Repos.StudentRepo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ClassroomController {
    private StudentRepo studentRepo;
    private AssignmentRepo assignmentRepo;
    private ClassroomRepo classroomRepo;

    public ClassroomController(StudentRepo studentRepo, AssignmentRepo assignmentRepo, ClassroomRepo classroomRepo) {
        this.studentRepo = studentRepo;
        this.assignmentRepo = assignmentRepo;
        this.classroomRepo = classroomRepo;
    }

    @GetMapping("/classroom")
    public String displayClassroomPage(@RequestParam("id") Long id, Model model) {
        Classroom classroom = classroomRepo.findById(id).get();
        model.addAttribute("individualClassroom", classroom);
        return "classroom-template";
    }

    @GetMapping("/classroom/roll-call")
    public String getAllStudentsForClassroom(@RequestParam("id")Long id, Model model){
        Classroom classroom = classroomRepo.findById(id).get();
        model.addAttribute("individualClassroom", classroom);
        model.addAttribute("individualStudents", studentRepo.findAllByClassrooms(classroom));
        return "roll-call-template";
    }

}
