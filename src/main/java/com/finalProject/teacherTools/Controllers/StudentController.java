package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Note;
import com.finalProject.teacherTools.Models.Student;
import com.finalProject.teacherTools.Repos.NoteRepo;
import com.finalProject.teacherTools.Repos.StudentRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class StudentController {
    private StudentRepo studentRepo;
    private NoteRepo noteRepo;

    public StudentController(StudentRepo studentRepo, NoteRepo noteRepo) {
        this.studentRepo = studentRepo;
        this.noteRepo = noteRepo;
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


    @PostMapping("/student/{id}")
    public String addStudentNote(@RequestParam("id") Long id, Model model,@RequestParam String title,@RequestParam String noteToAdd,@RequestParam String date){
        Student studentToAddNote = studentRepo.findById(id).get();
        Note noteToDisplay = new Note(title, noteToAdd, date);
        studentToAddNote.addNoteToStudent(noteToDisplay);
        studentRepo.save(studentToAddNote);
        noteRepo.save(noteToDisplay);
        
        
        model.addAttribute("note", noteToDisplay);
        model.addAttribute("individualStudent", studentToAddNote);

        return "home-page-template";
        

    }
}
