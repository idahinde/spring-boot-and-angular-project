package com.heathify.validate;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/check-date")
public class CheckValidationController {

    @GetMapping
    public ResponseEntity<Map<String, Object>> check(@Valid @ModelAttribute DatModel datModel, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(Map.of("Error", "Invalid Date"));
        } else {
            return ResponseEntity.ok(Map.of("Date", datModel.getLocalDate().toString()));
        }
    }

}
