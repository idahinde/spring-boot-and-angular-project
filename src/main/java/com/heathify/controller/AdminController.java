package com.heathify.controller;

import com.heathify.model.Appointment;
import com.heathify.model.Dietician;
import com.heathify.model.UserDetails;
import com.heathify.repository.AppointmentRepository;
import com.heathify.repository.DieticianRepository;
import com.heathify.repository.UserRepository;
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
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DieticianRepository dieticianRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Admin fetch User Data List
    @GetMapping(value = "/fetchUserDataList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<UserDetails>> fetchUserDataList() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // Admin delete user Data
    @PostMapping(value = "/deleteUser", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> deleteUser(@RequestParam("userId") long id) {
        Map<String, Object> map = new HashMap<>();
        try {

            userRepository.deleteById(id);
            map.put("message", "User Account was Successfully Deleted");
            map.put("title", "Delete Successful");
            return ResponseEntity.ok(map);
        } catch (Exception e) {
            map.put("message", "Cannot Delete User Account; Record Already Exist.");
            map.put("title", "Delete Error");
            return ResponseEntity.badRequest().body(map);
        }

    }

    // Admin fetch Dietician Data List
    @GetMapping(value = "/fetchDieticianDataList", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Dietician>> fetchDieticianDataList() {
        return ResponseEntity.ok(dieticianRepository.findAll());
    }

    // Admin delete Dietician Data
    @PostMapping(value = "/deleteDietician", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> deleteDietician(@RequestParam("dieticianId") long id) {
        Map<String, Object> map = new HashMap<>();
        try {

            dieticianRepository.deleteById(id);
            map.put("message", "Dietician Account was Successfully Deleted");
            map.put("title", "Delete Successful");
            return ResponseEntity.ok(map);
        } catch (Exception e) {
            map.put("message", "Cannot Delete Dietician Account; Record Already Exist.");
            map.put("title", "Delete Error");
            return ResponseEntity.badRequest().body(map);
        }
    }

    // fetch All Appointment
    @GetMapping(value = "/fetchAllAppointment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Appointment>> fetchAllAppointment() {
        return ResponseEntity.ok(appointmentRepository.findAll());
    }

}
