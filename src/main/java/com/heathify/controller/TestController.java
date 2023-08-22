package com.heathify.controller;

import com.heathify.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.persistence.Tuple;

/**
 * @Author: idris is'haq
 * @E-Mail: idahinde@gmail.com
 * @Date: 31 Oct, 2022
 */

@Controller
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/rundata")
    public ResponseEntity<?> runData(@RequestParam("email") String email) {
        Tuple mapda = userRepository.findData(1);
        System.out.println(mapda);
        System.out.println(userRepository.findPhoneNumberById(1));
        return ResponseEntity.ok(mapda);
    }

}
