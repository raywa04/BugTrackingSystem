package com.example.bugtrackingsystem.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String username;

    @NotNull
    private String password;

    // getters and setters
}
