package com.example.demo.mapper;
import org.apache.ibatis.annotations.Mapper;
import com.example.demo.model.TestData;

import java.util.List;
@Mapper
public interface TestMapper {
    List<TestData> getAllUser();
}
