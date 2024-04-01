package com.example.filmStreaming.controller;

import com.example.filmStreaming.dto.ReqRes;
import com.example.filmStreaming.model.Film;
import com.example.filmStreaming.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminUser {
    @Autowired
    private FilmRepository filmRepository;

    @GetMapping("/public/films")
    public ResponseEntity<Object> getAllFilms() {
        return ResponseEntity.ok(filmRepository.findAll());
    }

    @PostMapping("/admin/savefilms")
    public ResponseEntity<Object> saveFilm(@RequestBody ReqRes filmRequest) {
        Film filmToSave = new Film();
        filmToSave.setFilmName(filmRequest.getFilmName());
        filmToSave.setPath(filmRequest.getPath());
        return ResponseEntity.ok(filmRepository.save(filmToSave));
        }

    @PostMapping("/user/alone")
    public ResponseEntity<Object> getFilm(@RequestBody ReqRes filmRequest) {
//        Film filmToSave = new Film();
//        filmToSave.setFilmName(filmRequest.getFilmName());
//        filmToSave.setPath(filmRequest.getPath());
//        return ResponseEntity.ok(filmRepository.save(filmToSave));
        return ResponseEntity.ok("User alone can only access this API ");
    }


}