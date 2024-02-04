package com.example.demo.service;

import com.example.demo.mapper.TestMapper;
import com.example.demo.model.TestData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestService {
    private TestMapper testMapper;
    /*
    /**
     TestService 的建構子，用於注入 TestMapper 依賴
     */
    @Autowired
    public TestService(TestMapper testMapper) {

        this.testMapper = testMapper;
    }
    /*
        獲取所有數據
    */
    public  List<TestData> getAllUser() {

        return testMapper.getAllUser();
    }
}
