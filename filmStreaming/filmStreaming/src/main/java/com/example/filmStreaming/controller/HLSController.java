package com.example.filmStreaming.controller;
import com.example.filmStreaming.dto.ReqRes;
import com.example.filmStreaming.repository.FilmRepository;
import com.example.filmStreaming.service.HLSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/hls")
public class HLSController {

    @Autowired
    private HLSService hlsServiceReal;
    @Autowired
    private FilmRepository filmRepository;
//    @Autowired
//    private HostFilmFilesService hostFilmFilesService;


    @PostMapping("/generate")
    public String generate(@RequestBody ReqRes filmRequest) {
        String userName = filmRequest.getEmail();
        UUID uuid = filmRequest.getUuid();
        return hlsServiceReal.generate(userName, uuid);
    }

//    @PostMapping("/hostFilmFiles")
//    public ResponseEntity<Object> hostFilm(@RequestBody ReqRes filmRequest) {
//    UUID uuid = filmRequest.getUuid();
//    String pathToGetFilm = filmRepository.findPathByID(uuid).orElse("Path not found");
//    if (pathToGetFilm.equals("Path not found")) {
//        return ResponseEntity.ok("Film not found");
//    }
//    return ResponseEntity.ok(hostFilmFilesService.uploadFolder(
//            pathToGetFilm, "/home/netflop/upload"));
//
//    }
}
