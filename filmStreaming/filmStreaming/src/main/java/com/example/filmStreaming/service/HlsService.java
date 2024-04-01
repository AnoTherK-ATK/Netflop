package com.example.filmStreaming.service;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class HlsService {

    private static final Logger logger = LoggerFactory.getLogger(HlsService.class);

    public String generateHlsContent(String videoPath) {
        try {
            // Xây dựng lệnh FFMPEG để tạo nội dung HLS từ videoPath
            String[] ffmpegCommand = { "ffmpeg", "-i", videoPath, "-c:v", "libx264", "-crf", "21", "-preset", "veryfast", "-c:a", "aac", "-b:a", "128k", "-ac", "2", "-f", "hls", "output.m3u8" };

            // Sử dụng ProcessBuilder để thực thi lệnh FFMPEG
            ProcessBuilder pb = new ProcessBuilder(ffmpegCommand);

            // Thực thi lệnh
            Process process = pb.start();

            // Đợi quá trình FFMPEG kết thúc
            int exitCode = process.waitFor();
            if (exitCode != 0) {
                throw new RuntimeException("FFMPEG process exited with error code: " + exitCode);
            }
            String fileName = videoPath.substring(videoPath.lastIndexOf("/") + 1);
            String outputPath = "D:/output" + fileName + "/";
            // Trả về đường dẫn đến file m3u8 hoặc nội dung HLS
            return outputPath + "m3u8";
        } catch (IOException | InterruptedException e) {
            logger.error("Error generating HLS content: " + e.getMessage(), e);
            return null;
        }
    }
}

