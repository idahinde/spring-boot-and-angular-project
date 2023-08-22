package com.heathify.controller;

import com.heathify.model.Details;
import com.heathify.model.UserDetails;
import com.heathify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserRegistrationController {

    @Autowired
    private UserRepository userRepository;

    // register new dietician
    @PostMapping(value = "/registerUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> register(
            @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
            @RequestParam("emailAddress") String emailAddress, @RequestParam("password") String password,
            @RequestParam("phoneNumber") String phoneNumber, @RequestParam("age") String age,
            @RequestParam("height") String height, @RequestParam("currentWeight") String currentWeight,
            @RequestParam("targetWeight") String targetWeight) {

        try {

            Details details = new Details();
            details.setFirstName(firstName);
            details.setLastName(lastName);
            details.setEmailAddress(emailAddress);
            details.setPassword(password);

            UserDetails user = new UserDetails();
            user.setPhoneNumber(phoneNumber);
            user.setDetails(details);
            user.setAge(age);
            user.setHeight(height);
            user.setCurrentWeight(currentWeight);
            user.setTargetWeight(targetWeight);
            user.setRegistrationTime(new java.sql.Timestamp(new java.util.Date().getTime()));

            userRepository.save(user);
            Map<String, Object> map = new HashMap<>();

            if (user.getId() > 0) {
                map.put("message", "User Registration was Successful");
                map.put("title", "Registration Successful");
                return ResponseEntity.ok(map);
            } else {
                map.put("message", "Unable to Register User; Error Occur.");
                map.put("title", "Registration Error");
                return ResponseEntity.badRequest().body(map);
            }
        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Unable to Register User; Duplicate Email Address Or Phone Number.");
            map.put("title", "Duplicate Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
        }
    }

}
