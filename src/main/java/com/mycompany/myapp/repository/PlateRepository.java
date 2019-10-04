package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Plate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlateRepository extends JpaRepository<Plate,String> {
//    @Query("SELECT Course FROM course c  WHERE c.name = :courseName")
//    Course findCourseByCourseName(@Param("courseName") String courseName);

    Optional<Plate> findPlateByAssayBarcode(String assayBarcode);

}
