package com.heathify.controller;

import com.heathify.model.DietWorkData;
import com.heathify.repository.AppointmentRepository;
import com.heathify.repository.DietWorkDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DietWorkController {

    @Autowired
    private DietWorkDataRepository dietWorkDataRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;

    // Post Diet and Work Out Data
    @PostMapping(value = "/saveUserDietWorkData", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, Object>> saveUserDietWorkData(@RequestParam("Id") long id, @RequestParam("prescription") String prescription) {

        try {

            DietWorkData workData = new DietWorkData();
            workData.setPrescription(prescription);
            workData.setAppointment(appointmentRepository.findById(id).get());

            dietWorkDataRepository.save(workData);
            Map<String, Object> map = new HashMap<>();

            if (workData.getId() > 0) {
                map.put("message", "User Diet and Work Out was Successfully Posted");
                map.put("title", "Registration Successful");
                return ResponseEntity.ok(map);
            } else {
                map.put("message", "Unable to Post User Diet and Work Out; Error Occur.");
                map.put("title", "Registration Error");
                return ResponseEntity.badRequest().body(map);
            }

        } catch (Exception e) {
            Map<String, Object> map = new HashMap<>();
            map.put("message", "Unable to Post User Diet and Work Out; Please try again.");
            map.put("title", "Post Error");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
        }
    }

    // Fetch Dietician User Diet and Work Out Data
    @GetMapping(value = "/fetchDieticianWorkOutData", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<DietWorkData>> fetchDieticianWorkData(@RequestParam("dieticianId") long id) {
        return ResponseEntity.ok(dietWorkDataRepository.fetchAllDieticianWorkOutData(id));
    }

    // Fetch User Diet and Work out data
    @GetMapping(value = "/fetchUserWorkOutData", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Iterable<DietWorkData>> fetchUserWorkData(@RequestParam("userId") long id) {
        return ResponseEntity.ok(dietWorkDataRepository.fetchAllUserWorkOutData(id));
    }

}
