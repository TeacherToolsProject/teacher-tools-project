package com.finalProject.teacherTools;

import com.finalProject.teacherTools.Models.Assignment;
import com.finalProject.teacherTools.Models.Classroom;
import com.finalProject.teacherTools.Models.Grade;
import com.finalProject.teacherTools.Models.Note;
import com.finalProject.teacherTools.Models.Student;
import com.finalProject.teacherTools.Repos.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

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

    @Override
    public void run(String... args) throws Exception{

        Classroom apHistoryOne = new Classroom("AP History One", 9, "402A", "8:30", 2021, "Fall");
        classroomRepo.save(apHistoryOne);
        Classroom civilWarHistory = new Classroom("Civil War History", 10, "Zoom Id: 12354-78", "10:00", 2021, "Fall");
        classroomRepo.save(civilWarHistory);

        Student cushmanGrant = new Student("Grant Cushman", 
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
        "Shari Little", "sharilittle123@gmail.com", "614-867-5309", 19, 5, 1979, apHistoryOne);
        studentRepo.save(cushmanGrant);
        Student fongGary = new Student("Gary Fong",
        "https://images.unsplash.com/photo-1544168190-79c17527004f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
         "Ben Fong", "ben_fong@nomail.com", "614-555-1212", 1, 3, 2006, civilWarHistory);
        studentRepo.save(fongGary);
        Student williamsAbbey = new Student("Abbey Williams",
        "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
        "Trent Williams", "trentman123@nomail.com", "780-555-1212", 6, 10, 2006, apHistoryOne);
        studentRepo.save(williamsAbbey);
        Student stevensWendy = new Student("Wendy Stevens",
        "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", 
        "Martha Stevens", "marthas123@nomail.com", "580-555-6985", 9, 12, 2005, civilWarHistory);
        studentRepo.save(stevensWendy);
        Student jamesLester = new Student("Lester James","https://images.unsplash.com/photo-1596495717788-01458887290b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "Agatha James", "agathajames@nomail.com", "614-532-8965", 6, 7, 2006, apHistoryOne, civilWarHistory);
        studentRepo.save(jamesLester);
        apHistoryOne.addStudent(cushmanGrant);
        apHistoryOne.addStudent(williamsAbbey);
        apHistoryOne.addStudent(jamesLester);
        classroomRepo.save(apHistoryOne);
        civilWarHistory.addStudent(fongGary);
        civilWarHistory.addStudent(stevensWendy);
        civilWarHistory.addStudent(jamesLester);
        classroomRepo.save(civilWarHistory);

        Assignment apHistoryOneFirstAssignment = new Assignment(apHistoryOne, "Favorite Ancient Civilization", "Write a one page paper detailing your favorite ancient civilization, where it was located, " +
                "what tools they used, what languages they spoke, and any interesting achievements or conflicts they were involved in.", "08/28/2021", "09/02/2021", "100");
        assignmentRepo.save(apHistoryOneFirstAssignment);
        Assignment civilWarHistoryFirstAssignment = new Assignment(civilWarHistory, "Summarize the accomplishment of a famous Civil War general", "Choose any Civil War general and summarize the accomplishments of that general, " +
                "including major victories and areas he fought in.", "08/28/2021", "09/03/2021", "50");
        assignmentRepo.save(civilWarHistoryFirstAssignment);

        apHistoryOneFirstAssignment.addStudent(cushmanGrant);
        apHistoryOneFirstAssignment.addStudent(williamsAbbey);
        apHistoryOneFirstAssignment.addStudent(jamesLester);
        assignmentRepo.save(apHistoryOneFirstAssignment);

        civilWarHistoryFirstAssignment.addStudent(fongGary);
        civilWarHistoryFirstAssignment.addStudent(stevensWendy);
        civilWarHistoryFirstAssignment.addStudent(jamesLester);
        assignmentRepo.save(civilWarHistoryFirstAssignment);

        Grade grantCushmanApHistoryGrade = new Grade(apHistoryOneFirstAssignment, 97, 100);
        gradeRepo.save(grantCushmanApHistoryGrade);

        grantCushmanApHistoryGrade.addStudentToGrade(cushmanGrant);
        gradeRepo.save(grantCushmanApHistoryGrade);

        Grade abbeyWilliamsApHistoryGrade = new Grade(apHistoryOneFirstAssignment, 95, 100);
        gradeRepo.save(abbeyWilliamsApHistoryGrade);

        abbeyWilliamsApHistoryGrade.addStudentToGrade(williamsAbbey);
        gradeRepo.save(abbeyWilliamsApHistoryGrade);

        Note grantCushmanNote = new Note("Reminider for Grant", "Remind Grant to cover his text book by next week.", "8/30/2021");

        cushmanGrant.addNoteToStudent(grantCushmanNote);
        studentRepo.save(cushmanGrant);
    }
}
