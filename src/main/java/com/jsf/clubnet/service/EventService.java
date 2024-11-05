package com.jsf.clubnet.service;

import com.jsf.clubnet.model.Event;
import com.jsf.clubnet.repo.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    public List<Event> allEvents(){
        return eventRepository.findAll();
    }

}
