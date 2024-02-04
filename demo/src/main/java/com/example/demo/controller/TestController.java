package com.example.demo.controller;

import com.example.demo.model.TestData;
import com.example.demo.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/test")
public class TestController {
    @Autowired
    private TestService testService;
    @GetMapping("/data")
    /*
        獲取所有數據
    */
    public List<TestData> getAllUser(){

        return testService.getAllUser();
    }
}
