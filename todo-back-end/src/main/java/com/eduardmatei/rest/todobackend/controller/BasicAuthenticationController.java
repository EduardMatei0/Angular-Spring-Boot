package com.eduardmatei.rest.todobackend.controller;

import com.eduardmatei.rest.todobackend.model.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {


    @GetMapping("/basicauth")
    public AuthenticationBean authenticationBean() {
       return new AuthenticationBean("You are authenticated");
    }

    @GetMapping("/hello-world/{name}")
    public AuthenticationBean helloWorld(@PathVariable String name) {
        return new AuthenticationBean("Hello " + name);
    }

}
