package com.example.bugtrackingsystem.service;

import com.example.bugtrackingsystem.entity.Bug;
import com.example.bugtrackingsystem.repository.BugRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BugService {
    @Autowired
    private BugRepository bugRepository;

    public Bug save(Bug bug) {
        return bugRepository.save(bug);
    }

    public List<Bug> findAll() {
        return bugRepository.findAll();
    }

    public Bug findById(Long id) {
        return bugRepository.findById(id).orElse(null);
    }

    public Bug update(Long id, Bug bugDetails) {
        Bug bug = bugRepository.findById(id).orElse(null);
        if (bug != null) {
            bug.setTitle(bugDetails.getTitle());
            bug.setDescription(bugDetails.getDescription());
            bug.setStatus(bugDetails.getStatus());
            bug.setPriority(bugDetails.getPriority());
            return bugRepository.save(bug);
        }
        return null;
    }

    public void delete(Long id) {
        bugRepository.deleteById(id);
    }
}
