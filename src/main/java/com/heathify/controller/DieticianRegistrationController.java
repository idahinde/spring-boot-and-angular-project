package com.heathify.controller;

import com.heathify.model.Details;
import com.heathify.model.Dietician;
import com.heathify.repository.DieticianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DieticianRegistrationController {

    @Autowired
    private DieticianRepository dieticianRepository;

    // Create Dietician Account
    @PostMapping(value = "/registerDietician", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> register(
            @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
            @RequestParam("emailAddress") String emailAddress, @RequestParam("password") String password) {

        Details details = new Details();
        details.setFirstName(firstName);
        details.setLastName(lastName);
        details.setEmailAddress(emailAddress);
        details.setPassword(password);

        Dietician dietician = new Dietician();
        dietician.setDetails(details);

        dieticianRepository.save(dietician);
        Map<String, Object> map = new HashMap<>();

        if (dietician.getId() > 0) {
            map.put("message", "Dietician Registration was Successful");
            map.put("title", "Registration Successful");
            return ResponseEntity.ok(map);
        } else {
            map.put("message", "Unable to Register Dietician; Error Occur.");
            map.put("title", "Registration Error");
            return ResponseEntity.badRequest().body(map);
        }
    }

    // fetch All Dietician Account List
    @GetMapping(value = "/fetchDietician", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Dietician>> listAll() {
        return ResponseEntity.ok(dieticianRepository.findAll());
    }

}
