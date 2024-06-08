package com.example.bugtrackingsystem.repository;

import com.example.bugtrackingsystem.entity.Bug;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BugRepository extends JpaRepository<Bug, Long> {
}
