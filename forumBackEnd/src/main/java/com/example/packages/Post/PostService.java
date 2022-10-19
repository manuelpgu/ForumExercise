package com.example.packages.Post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    private final PostRepository postRepository;


    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<Post> getPosts(){

        return  postRepository.findByUserName("juanfran");
       // return postRepository.findAll();
    }

    public void savePosts(List<Post> posts){
        postRepository.saveAll(posts);

    }



}
