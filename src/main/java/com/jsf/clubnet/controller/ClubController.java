package com.jsf.clubnet.controller;

import com.jsf.clubnet.model.Club;
import com.jsf.clubnet.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping(value = "/api/clubs")
public class ClubController {

    @Autowired
    private ClubService clubService;
    @GetMapping
    public ResponseEntity<List<Club>> getAllClubs() {
        return new ResponseEntity<List<Club>>(clubService.allClubs(),HttpStatus.OK);
    }

}
