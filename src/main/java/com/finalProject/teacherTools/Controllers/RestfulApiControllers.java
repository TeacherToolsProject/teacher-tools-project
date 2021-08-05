package com.finalProject.teacherTools.Controllers;

import javax.annotation.Resource;

import com.finalProject.teacherTools.Models.Classroom;
import com.finalProject.teacherTools.Repos.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestfulApiControllers {

    // @Resource
    // private AssignmentRepo assignmentRepo;
    @Resource
    private ClassroomRepo classroomRepo;
    // @Resource
    // private GradeRepo gradeRepo;
    // @Resource
    // private NoteRepo noteRepo;
    // @Resource
    // private StudentRepo studentRepo;

    @PostMapping("/api/classroom")
    public Iterable<Classroom> addNewClassroom(@RequestBody Classroom classroomToAdd){
        classroomRepo.save(classroomToAdd);
        return classroomRepo.findAll();
    }
}
