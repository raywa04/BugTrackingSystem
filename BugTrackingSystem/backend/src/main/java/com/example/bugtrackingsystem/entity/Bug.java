package com.example.bugtrackingsystem.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Bug {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String description;

    @NotNull
    private String status;

    @NotNull
    private String priority;

    // getters and setters
}
