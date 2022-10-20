package com.example.packages.Post;

import com.example.packages.student.Student;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="api/v1/posts")
public class PostController {


    private final PostService postService ;
    private ArrayList<String> forbiddenWords = new ArrayList<String>();

    public PostController(PostService postService) {
        this.postService = postService;

        forbiddenWords.addAll(List.of("Mierda", "Culo","Pedo","Asesinato"));
    }

    @GetMapping
    public List<Post> getPosts() {
        return postService.getPosts();
    }

    @PostMapping
    public void registerNewPost(@RequestBody Post post) {

        if(post.getPostBody().contains())

        postService.addNewPost(post);
    }

    @GetMapping(path="{thread}")
    public List<Post> getPostByTheadName(@PathVariable("thread") String thread) {
        System.err.println("Se llama al metodo");
        //return postService.getPosts();

        return postService.findByThread(thread);


       /*return postService.getPosts().stream()
                .filter(post -> post.getThread().equals(thread))
                .collect(Collectors.toList());*/
    }



   /* @GetMapping(path="saveSome")
    public void sameSome() {

        Post post1 = new Post("pepe","category","trial post","link");

        Post post2 = new Post("juanfran","suggestion","post 2","link2");

        Post post3 = new Post("manuel","clarification","post 3","link3");

        postService.savePosts(List.of(post1, post2,post3));
    }*/




}
