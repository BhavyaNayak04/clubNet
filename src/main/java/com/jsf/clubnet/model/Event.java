package com.jsf.clubnet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Events")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Event {
    @Id
    private String event_id;
    private String name;
    private String description;
    private Date date;
    private String location;
    private String club_id;
}
