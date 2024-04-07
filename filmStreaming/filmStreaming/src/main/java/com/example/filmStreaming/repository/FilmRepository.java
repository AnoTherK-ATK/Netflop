package com.example.filmStreaming.repository;

import com.example.filmStreaming.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FilmRepository extends JpaRepository<Film,Long> {

//    @Override
//    Optional<Film> findById(Long ID);
//    Optional<Film> findByFilmName(String filmName);

    @Query("SELECT f.path FROM Film f WHERE f.filmName = :filmName")
    Optional<String> findPathByFilmName(@Param("filmName") String filmName);

}
