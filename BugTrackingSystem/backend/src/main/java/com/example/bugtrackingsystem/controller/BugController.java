package com.example.bugtrackingsystem.controller;

import com.example.bugtrackingsystem.entity.Bug;
import com.example.bugtrackingsystem.service.BugService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bugs")
public class BugController {
    @Autowired
    private BugService bugService;

    @PostMapping
    public Bug createBug(@RequestBody Bug bug) {
        return bugService.save(bug);
    }

    @GetMapping
    public List<Bug> getAllBugs() {
        return bugService.findAll();
    }

    @GetMapping("/{id}")
    public Bug getBugById(@PathVariable Long id) {
        return bugService.findById(id);
    }

    @PutMapping("/{id}")
    public Bug updateBug(@PathVariable Long id, @RequestBody Bug bugDetails) {
        return bugService.update(id, bugDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteBug(@PathVariable Long id) {
        bugService.delete(id);
    }
}
