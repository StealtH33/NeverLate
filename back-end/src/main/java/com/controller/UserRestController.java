package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Response;
import com.model.User;
import com.repository.UserRepository;

import java.util.List;

@RestController
public class UserRestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/login")
    public Response login(@RequestBody User userReceived) {
        Response response = new Response();
        try {
            if (userReceived.getUsername().isEmpty()) {
                if (userReceived.getPassword().isEmpty())
                    response.setMessage("Please enter your Username and Password!");
                else
                    response.setMessage("Please enter your Username!");
                return response;
            }
            if (userReceived.getPassword().isEmpty()) {
                response.setMessage("Please enter your Password!");
                return response;
            }
            User userDB = userRepository.getOneByUsername(userReceived.getUsername());
            if (userDB.getPassword().equals(userReceived.getPassword())) {
                response.setMessage("Connected");
                return response;
            }
            response.setMessage("Username and Password doesn't match!");
            return response;
        } catch (NullPointerException e) {
            System.out.println(e);
            response.setMessage("Username not found!");
            return response;
        }
    }

    @PostMapping("/register")
    public Response addUser(@RequestBody User user) {
        Response response = new Response();
        try {
            if (user.getUsername().isEmpty()) {
                if (user.getPassword().isEmpty())
                    response.setMessage("Please enter your Username and Password!");
                else
                    response.setMessage("Please enter your Username!");
                return response;
            }
            if (user.getPassword().isEmpty()) {
                response.setMessage("Please enter your Password!");
                return response;
            }
            userRepository.save(user);
            response.setMessage("Account registered successfully!");
            return response;
        } catch (DataIntegrityViolationException e) {
            response.setMessage("The username already exists!");
            return response;
        }
    }
}
