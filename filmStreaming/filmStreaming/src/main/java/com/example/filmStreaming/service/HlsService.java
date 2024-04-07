package com.example.filmStreaming.service;

import com.example.filmStreaming.dto.ReqRes;
import com.example.filmStreaming.repository.FilmRepository;
import net.bramp.ffmpeg.FFmpeg;
import net.bramp.ffmpeg.FFmpegExecutor;
import net.bramp.ffmpeg.builder.FFmpegBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.Optional;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
@Service
public class HLSService {

    @Autowired
    private FilmRepository filmRepository;

    private final String STORAGE_DIRECTORY = "D:\\hls\\storage";
    private final String FILM_LIST_DIRECTORY = "D:\\hls\\storage\\filmList";
    private final FFmpeg ffmpeg = new FFmpeg();
    private final ExecutorService executorService = Executors.newCachedThreadPool();

    public HLSService() throws IOException {
    }

    public String generateHLS(String userName, String filmName) {
//        Optional<String> pathOptional = filmRepository.findPathByFilmName(filmName);
////        String pathByFilmName;
////        pathByFilmName = pathOptional.orElse("Path not found");
////        if (pathByFilmName.equals("Path not found")) {
////            return "Path not found";
////        }

        String userDirectoryPath = STORAGE_DIRECTORY + File.separator + userName;
        File userDirectory = new File(userDirectoryPath);

        if (!userDirectory.exists()) {
            userDirectory.mkdirs();
        }

        File userVideoDirectory = new File(userDirectoryPath);

        if (userVideoDirectory.exists()) {
            deleteHLSFiles(userVideoDirectory);
        }


        final String inputVideoPath = FILM_LIST_DIRECTORY + File.separator + "test.mp4";
        final String outputM3U8Path = userVideoDirectory + File.separator;
        try {
            Thread thread720p =
                    new Thread() {
                        public void run() {
                            generateHLSWithResolution(inputVideoPath, outputM3U8Path,  "720p", 1280, 720, 4000);
                        }
                    };
            thread720p.start();

            Thread thread480p =
                    new Thread() {
                        public void run() {
                            generateHLSWithResolution(inputVideoPath, outputM3U8Path,  "480p", 854, 480, 2000);
                        }
                    };
            thread480p.start();

            Thread thread360p =
                    new Thread() {
                        public void run() {
                            generateHLSWithResolution(inputVideoPath, outputM3U8Path,  "360p", 640, 360, 1000);
                        }
                    };
            thread360p.start();
        }
        catch (Exception e) {
            e.printStackTrace();
            return "Failed HLS generation for film: " + filmName;
        }
        return "Successful HLS generation for film: " + filmName;
    }

    private void generateHLSWithResolution(String inputVideoPath, String outputM3U8Path, String resolution, int width, int height, int bitrate) {
        String outputDirectoryPath = outputM3U8Path + "output_" + resolution ;
        File outputDirectory = new File(outputDirectoryPath);
        if (!outputDirectory.exists()) {
            outputDirectory.mkdirs();
        }
        executorService.submit(() -> {
            FFmpegBuilder builder = new FFmpegBuilder()
                    .setInput(inputVideoPath)
                    .addOutput( outputDirectoryPath + File.separator  + resolution + ".m3u8")
                    .setFormat("hls")
                    .setAudioCodec("aac")
                    .setVideoCodec("libx264")
                    .setVideoResolution(width, height)
                    .setVideoFrameRate(30)
                    .addExtraArgs("-hls_list_size", "0") // Thiết lập hls_list_size thành 0 để bao gồm tất cả các phân đoạn
//                    .setVideoBitRate(bitrate)
                    .done();

            try {
                new FFmpegExecutor(ffmpeg).createJob(builder).run();
                return "Successful HLS generation for resolution: " + resolution;
            } catch (Exception e) {
                e.printStackTrace();
                return "Failed HLS generation for resolution: " + resolution;
            }
        });
    }

    private void deleteHLSFiles(File directory) {
        File[] files = directory.listFiles();
        if (files != null) {
            for (File file : files) {
                if (file.isDirectory()) {
                    // Nếu là thư mục, gọi đệ quy để xóa các tệp trong thư mục đó
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
