package com.finalProject.teacherTools.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String guardianName;
    private String guardianEmail;
    private String guardianPhone;
    private int birthdayDay;
    private int birthdayMonth;
    private int birthdayYear;

    @ManyToMany (mappedBy = "students" )
    private Collection<Classroom> classrooms;

    @ManyToOne
    @JsonIgnore
    private Assignment assignments;

    @OneToMany
    private Collection<Grade> grades;

    @OneToMany
    private Collection<Note> notes;

    protected Student(){};

    public Student(String name, String guardianName, String guardianEmail, String guardianPhone, int birthdayDay,
                   int birthdayMonth, int birthdayYear, Classroom... classrooms){
        this.name = name;
        this.guardianName = guardianName;
        this.guardianEmail = guardianEmail;
        this.guardianPhone = guardianPhone;
        this.birthdayDay = birthdayDay;
        this.birthdayMonth = birthdayMonth;
        this.birthdayYear = birthdayYear;
        this.classrooms = Set.of(classrooms);
    };

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getGuardianName() {
        return guardianName;
    }

    public String getGuardianEmail() {
        return guardianEmail;
    }

    public String getGuardianPhone() {
        return guardianPhone;
    }

    public int getBirthdayDay() {
        return birthdayDay;
    }

    public int getBirthdayMonth() {
        return birthdayMonth;
    }

    public int getBirthdayYear() {
        return birthdayYear;
    }

    public Collection<Classroom> getClassrooms() {
        return classrooms;
    }

    public Assignment getAssignments() {
        return assignments;
    }

    public Collection<Grade> getGrades() {
        return grades;
    }

    public Collection<Note> getNotes() {
        return notes;
    }
}
