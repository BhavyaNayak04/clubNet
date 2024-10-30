package com.jsf.clubnet.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection="Clubs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Club {
    @Id
    private String id;
    private String name;
    private String description;
    private String category_id;
    private String created_by;
    private List<String> members;
    private String image;
}
