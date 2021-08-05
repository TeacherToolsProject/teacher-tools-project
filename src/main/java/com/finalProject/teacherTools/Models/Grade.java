package com.finalProject.teacherTools.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Grade {

    @Id
    @GeneratedValue
    private Long id;

    private double grade;
    private double maximumGrade;

    @OneToOne(mappedBy = "grade")
    private Assignment assignment;

    @ManyToOne
    @JsonIgnore
    private Student students;

    protected Grade(){};

    public Grade(Assignment assignment, double grade, double maximumGrade){
        this.assignment = assignment;
        this.grade = grade;
        this.maximumGrade = maximumGrade;
    }

    public Long getId() {
        return id;
    }

    public double getGrade() {
        return grade;
    }

    public double getMaximumGrade() {
        return maximumGrade;
    }

    public Assignment getAssignment() {
        return assignment;
    }

    public Student getStudents() {
        return students;
    }

    public void addStudentToGrade(Student student){
        students.add(student);
    }
}
