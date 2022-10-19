package com.example.packages.Post;

import com.example.packages.student.Student;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/v1/posts")
public class PostController {
    private final PostService postService ;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> getPosts() {
        return postService.getPosts();
    }


    @GetMapping(path="saveSome")
    public void sameSome() {

        Post post1 = new Post("pepe","category","trial post","link");

        Post post2 = new Post("juanfran","suggestion","post 2","link2");

        Post post3 = new Post("manuel","clarification","post 3","link3");

        postService.savePosts(List.of(post1, post2,post3));
    }



}
