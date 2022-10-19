package com.example.packages.Post;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class PostConfig {
    @Bean
    CommandLineRunner commandLineRunner(PostRepository repository) {
        return args -> {
            Post post1 = new Post("pepe","category","trial post","link");

            Post post2 = new Post("juanfran","suggestion","post 2","link2");

            Post post3 = new Post("manuel","clarification","post 3","link3");

            repository.save(post1);
            repository.save(post2);
            repository.save(post3);
        };
    }
}
