package com.example.filmStreaming.controller;
import com.example.filmStreaming.dto.ReqRes;
import com.example.filmStreaming.service.HLSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost")
@RestController
@RequestMapping("/hls")
public class HLSController {
    @Autowired
    private HLSService hlsService;
    @PostMapping("/generate")
    public String generateHLS(@RequestBody ReqRes filmRequest) {
        String userName = filmRequest.getEmail();
        String filmName = filmRequest.getFilmName();
        return hlsService.generateHLS(userName, filmName);
    }
}
