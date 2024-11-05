package com.jsf.clubnet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Events")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Event {
    @Id
    private String id;
    private String name;
    private String club_id;
    private Date date;
    private String description;
    private Double fee;
    private String venue;
    private String Image;
}
