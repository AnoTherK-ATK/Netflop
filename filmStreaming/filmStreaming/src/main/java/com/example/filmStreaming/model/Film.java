package com.example.filmStreaming.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "films")
public class Film {
    @Id
    @SequenceGenerator(
            name = "film_sequence",
            sequenceName = "film_sequence",
            allocationSize = 1
    )
    @GeneratedValue (
            strategy =  GenerationType.SEQUENCE,
            generator = "film_sequence"
    )
    @Column(
            name="id",
            updatable = false
    )
    private long id;
    @Column(
            name = "filmName",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String filmName;
    @Column(
            name = "path",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String path;


    public Film(String filmName, String path) {
        this.filmName = filmName;
        this.path = path;
    }



}

