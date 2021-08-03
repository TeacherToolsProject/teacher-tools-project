package com.finalProject.teacherTools.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Set;

@Entity
public class Assignment {

    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private String name;
    @Lob
    private String description;
    private String assignedDate;
    private String dueDate;
    private String pointsWorth;

    @ManyToOne
    @JsonIgnore
    private Classroom classroom;

    @OneToMany
    private Collection<Student> students;

    @OneToOne
    private Grade grade;

    protected Assignment(){};

    public Assignment(Classroom classroom, String name, String description, String assignedDate, String dueDate, String pointsWorth, Student... students){
        this.classroom = classroom;
        this.name = name;
        this.description = description;
        this.assignedDate = assignedDate;
        this.dueDate = dueDate;
        this.pointsWorth = pointsWorth;
        this.students = Set.of(students);
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getAssignedDate() {
        return assignedDate;
    }

    public String getDueDate() {
        return dueDate;
    }

    public String getPointsWorth() {
        return pointsWorth;
    }

    public Classroom getClassroom() {
        return classroom;
    }

    public Collection<Student> getStudents() {
        return students;
    }
}
