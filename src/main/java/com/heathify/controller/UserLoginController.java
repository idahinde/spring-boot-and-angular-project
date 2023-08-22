package com.heathify.controller;

import com.heathify.model.UserDetails;
import com.heathify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserLoginController {

    @Autowired
    private UserRepository userRepository;

    // User login
    @PostMapping(value = "/loginUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> register(@RequestParam("username") String username,
                                                        @RequestParam("password") String password) {
        Map<String, Object> map = new HashMap<>();
        UserDetails details = userRepository.findByDetailsEmailAddressAndDetailsPassword(username, password);
        if (details != null) {
            map.put("userid", details.getId());
            map.put("fullname", details.getDetails().getFirstName() + " " + details.getDetails().getLastName());
            map.put("emailaddress", details.getDetails().getEmailAddress());
            map.put("phone", details.getPhoneNumber());
            map.put("message", "Login Was Successful");
            map.put("title", "Login Successful");
            return ResponseEntity.ok(map);
        } else {
            map.put("message", "Invalid Email Address or Password");
            map.put("title", "Login Error");
            return ResponseEntity.badRequest().body(map);
        }
    }

}
