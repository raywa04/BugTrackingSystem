package com.example.bugtrackingsystem.controller;

import com.example.bugtrackingsystem.entity.User;
import com.example.bugtrackingsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody User user) {
        return userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    }
}
