package com.finalProject.teacherTools.Controllers;

import com.finalProject.teacherTools.Models.Assignment;
import com.finalProject.teacherTools.Repos.AssignmentRepo;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AssignmentController {
    private AssignmentRepo assignmentRepo;

    public AssignmentController(AssignmentRepo assignmentRepo) {
        this.assignmentRepo = assignmentRepo;
    }

    @GetMapping("/assignment")
    public String displayAssignmentPage(@RequestParam("id") Long id, Model model){
        Assignment assignment = assignmentRepo.findById(id).get();
        model.addAttribute("individualAssignment", assignment);
        return "single-assignment-template";
    }
}
