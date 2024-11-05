package com.jsf.clubnet.controller;

import com.jsf.clubnet.model.Event;
import com.jsf.clubnet.service.EventService;
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
@RequestMapping(value = "/api/events")
public class EventController {

    @Autowired
    private EventService eventService;
    @GetMapping
    public ResponseEntity<List<Event>> getAllEvents() {
        return new ResponseEntity<>(eventService.allEvents(), HttpStatus.OK);
    }

}
