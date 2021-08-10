package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Student;
import com.finalProject.teacherTools.Repos.AssignmentRepo;
import com.finalProject.teacherTools.Repos.StudentRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StudentController {
    private StudentRepo studentRepo;
    private AssignmentRepo assignmentRepo;

    public StudentController(StudentRepo studentRepo, AssignmentRepo assignmentRepo) {
        this.studentRepo = studentRepo;
        this.assignmentRepo = assignmentRepo;
    }

    @GetMapping("/students")
    public String displayAllStudents(Model model){
        Iterable<Student> students = studentRepo.findAll();
        model.addAttribute("students", students);
        return "students-template";
    }

    @GetMapping("/student")
    public String displayStudentPage(@RequestParam("id") Long id, Model model) {
        Student student = studentRepo.findById(id).get();
        model.addAttribute("individualStudent", student);
        return "single-student-template";
    }
}
