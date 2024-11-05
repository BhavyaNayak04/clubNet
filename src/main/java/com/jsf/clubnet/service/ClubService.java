package com.jsf.clubnet.service;

import com.jsf.clubnet.repo.ClubRepository;
import com.jsf.clubnet.model.Club;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubService {

    @Autowired
    private ClubRepository clubRepository;
    public List<Club> allClubs(){
        return clubRepository.findAll();
    }
}
