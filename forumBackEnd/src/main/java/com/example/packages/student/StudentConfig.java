package com.example.packages.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    /*@Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student pepito = new Student("Pepito", "pepito@pepito.com",
                    LocalDate.of(2000, Month.APRIL, 21));

            Student jose = new Student(
                    "Jose", "jose@jose.com",
                    LocalDate.of(2000, Month.APRIL, 21));
            repository.saveAll(List.of(pepito, jose));
        };
    }*/
}
