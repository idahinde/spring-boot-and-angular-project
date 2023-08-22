package com.heathify.controller;

import com.heathify.model.Appointment;
import com.heathify.repository.AppointmentRepository;
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
public class DieticianController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    // fetch Dietician Appointment
    @GetMapping(value = "/fetchDieticianAppointment", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<Appointment>> fetchAppointment(@RequestParam("dieticianId") long id, @RequestParam("statusName") String statusName) {
        return ResponseEntity.ok(appointmentRepository.fetchDieticianAppointment(id, statusName));
    }

    //save Appointment Action (Accept ot Reject)
    @PostMapping(value = "/saveAppointmentAction", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> saveAppointmentAction(@RequestParam("Id") long id, @RequestParam("statusAction") String statusAction) {

        Appointment appointment = appointmentRepository.findById(id).get();
        appointment.setStatus(statusAction);
        appointmentRepository.save(appointment);
        Map<String, Object> map = new HashMap<>();
        map.put("message", "User Appointment was Successfully Updated");
        map.put("title", "Post Successful");
        return ResponseEntity.ok(map);
    }

}
