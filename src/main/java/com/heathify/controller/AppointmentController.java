package com.heathify.controller;

import com.heathify.model.Appointment;
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
public class AppointmentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DieticianRepository dieticianRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Post Appointment
    @PostMapping(value = "/postAppointment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> register(
            @RequestParam("userId") long userId,
            @RequestParam("dieticianId") long dieticianId, @RequestParam("reason") String reason,
            @RequestParam("appDate") String appDate, @RequestParam("appTime") String appTime) {

        Map<String, Object> map = new HashMap<>();
        try {

            Appointment appointment = new Appointment();
            appointment.setAppointmentTime(appTime);
            appointment.setAppointmentDate(appDate);
            appointment.setDietician(dieticianRepository.findById(dieticianId).get());
            appointment.setUserDetails(userRepository.findById(userId).get());
            appointment.setReason(reason);
            appointment.setStatus("Pending");

            System.out.println(appointment);
            appointmentRepository.save(appointment);

            if (appointment.getId() > 0) {
                map.put("message", "User Appointment was Successfully Posted");
                map.put("title", "Post Successful");
                return ResponseEntity.ok(map);
            } else {
                map.put("message", "Unable to Post User Appointment; Error Occur.");
                map.put("title", "Post Error");
                return ResponseEntity.badRequest().body(map);
            }
        } catch (Exception e) {
            map.put("title", "Post Error");
            map.put("message", "Unable to Post Appointment.");
            return ResponseEntity.status(500).body(map);
        }
    }

    // fetch Appointment
    @GetMapping(value = "/fetchAppointment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Appointment>> fetchAppointment(@RequestParam("userId") long userId) {
        return ResponseEntity.ok(appointmentRepository.fetchUserAppointment(userId));
    }

}
