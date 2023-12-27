package com.springboot.employeemanagmentsystem.service.impl;

import com.springboot.employeemanagmentsystem.dto.EmployeeDto;
import com.springboot.employeemanagmentsystem.entity.Employee;
import com.springboot.employeemanagmentsystem.mapper.EmployeeMapper;
import com.springboot.employeemanagmentsystem.repository.EmployeeRepository;
import com.springboot.employeemanagmentsystem.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {


    @Autowired
    private EmployeeRepository employeeRepository;


    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
