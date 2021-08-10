package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Classroom;
import com.finalProject.teacherTools.Models.Student;
import com.finalProject.teacherTools.Repos.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class RestfulApiControllers {

    @Resource
    private AssignmentRepo assignmentRepo;
    @Resource
    private ClassroomRepo classroomRepo;
    @Resource
    private GradeRepo gradeRepo;
    @Resource
    private NoteRepo noteRepo;
    @Resource
    private StudentRepo studentRepo;

    @PostMapping("/api")
    public String addNewClassroom(@RequestBody Classroom classroomToAdd){
        classroomRepo.save(classroomToAdd);
        return "redirect:/";
    }

    @PostMapping("/api/students")
    public String addnewStudent(@RequestBody Student studentToAdd){ 
        studentRepo.save(studentToAdd);
        return "redirect:/students";
    }

    //
//    @PostMapping("/api/newAssignment")
//    public String addNewAssignment(@RequestParam String name, String description, Long classroomId){
//
//        Classroom classroom = classroomRepo.findById(classroomId).get();
//        Assignment assignmentToAdd = new Assignment(classroom,name,description,"Test", "test","test");
//        assignmentRepo.save(assignmentToAdd);
//
//        return "redirect:/classroom?id="+ classroomId;
//    }
    //

}
