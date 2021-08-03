package com.finalProject.teacherTools.Controllers;


import com.finalProject.teacherTools.Repos.ClassroomRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePageController {
    private ClassroomRepo classroomRepo;

    public HomePageController(ClassroomRepo classroomRepo) {
        this.classroomRepo = classroomRepo;
    }

    @GetMapping("/")
    public String displayHomePage(Model model) {
        model.addAttribute("classrooms", classroomRepo.findAll());
        return "home-page-template";
    }
}
