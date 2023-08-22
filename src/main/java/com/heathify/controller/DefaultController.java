package com.heathify.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class DefaultController {

    // Welcome Page
    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> home() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "hello spring boot!");
        return ResponseEntity.ok(map);
    }
}
