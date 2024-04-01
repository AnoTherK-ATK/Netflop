package com.example.filmStreaming.controller;

import com.example.filmStreaming.model.Film;
import com.example.filmStreaming.repository.FilmRepository;
import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.builder.FFmpegBuilder;
import net.bramp.ffmpeg.FFmpegExecutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.IOException;

@Controller
@RequestMapping("/hls")
public class HLSController {

    @Autowired
    private FilmRepository filmRepository;

    private final String STORAGE_DIRECTORY = "D:\\hls\\storage"; // Thư mục lưu trữ file HLS
    private final String FILM_LIST_DIRECTORY = "D:\\hls\\storage\\filmList"; // Thư mục chứa file MP4
    private final FFmpeg ffmpeg = new FFmpeg(); // Khởi tạo đối tượng FFmpeg
    private final FFmpegExecutor executor = new FFmpegExecutor(ffmpeg); // Khởi tạo đối tượng FFmpegExecutor

    public HLSController() throws IOException {
    }

    @GetMapping("/generate/{userna  me}/film/{filmname}")
    @ResponseBody
    public String generateHLS(@PathVariable String username, @PathVariable String filmname) {
        String userDirectoryPath = STORAGE_DIRECTORY + File.separator + username;
        File userDirectory = new File(userDirectoryPath);

        // Tạo thư mục cho người dùng nếu nó chưa tồn tại
        if (!userDirectory.exists()) {
            userDirectory.mkdirs();
        }

        // Kiểm tra xem thư mục cho video đã tồn tại hay chưa
        String videoDirectoryPath = userDirectoryPath;
        File videoDirectory = new File(videoDirectoryPath);

        // Nếu thư mục đã tồn tại, xóa tất cả các tệp HLS cũ
        if (videoDirectory.exists()) {
            deleteHLSFiles(videoDirectory);
        } else {
            videoDirectory.mkdirs(); // Tạo thư mục cho video mới
        }

        // Đường dẫn đến file input MP4
        String inputVideoPath = FILM_LIST_DIRECTORY + File.separator + "test.mp4";

        // Đường dẫn đến file output M3U8
        String outputM3U8Path = videoDirectory + File.separator + "output.m3u8";

        // Xây dựng lệnh FFmpeg để tạo HLS
        FFmpegBuilder builder = new FFmpegBuilder()
                .setInput(inputVideoPath)
                .addOutput(outputM3U8Path)
                .setFormat("hls")
                .setAudioCodec("aac")
                .setVideoCodec("libx264")
                .done();
        // Thực hiện lệnh FFmpeg
        try {
            executor.createJob(builder).run();
            System.out.println("HLS generated successfully for film: " + filmname);
            return "HLS generated successfully for film: " + filmname;
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Failed to generate HLS for film: " + filmname + ". Error: " + e.getMessage() + "\n");
            return "Failed to generate HLS for film: " + filmname + ". Error: " + e.getMessage() + "\n";
        }
    }

    // Hàm xóa tất cả các tệp HLS từ một thư mục
    private void deleteHLSFiles(File directory) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    deleteHLSFiles(file);
                } else {
                    if (file.getName().endsWith(".m3u8") || file.getName().endsWith(".ts")) {
                        file.delete();
                    }
                }
            }
        }
    }
}
