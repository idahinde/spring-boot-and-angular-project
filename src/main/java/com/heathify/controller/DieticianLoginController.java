package com.heathify.controller;

import com.heathify.model.Dietician;
import com.heathify.repository.DieticianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DieticianLoginController {

    @Autowired
    private DieticianRepository dieticianRepository;

    // Dietician Login
    @PostMapping(value = "/loginDietician", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> loginEvent(@RequestParam("username") String username,
                                                        @RequestParam("password") String password) {
        Map<String, Object> map = new HashMap<>();
        Dietician details = dieticianRepository.loginDietician(username, password);
        if (details != null) {
            map.put("userid", details.getId());
            map.put("fullname", details.getDetails().getFirstName() + " " + details.getDetails().getLastName());
            map.put("emailaddress", details.getDetails().getEmailAddress());
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
