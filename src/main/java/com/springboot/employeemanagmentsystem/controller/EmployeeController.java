package com.springboot.employeemanagmentsystem.controller;

import com.springboot.employeemanagmentsystem.dto.EmployeeDto;
import com.springboot.employeemanagmentsystem.entity.Employee;
import com.springboot.employeemanagmentsystem.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // create new employee REST API

    @PostMapping()
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto createdEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    // create Get employee by id REST API
    @GetMapping("/{employeeId}")
    public ResponseEntity<EmployeeDto> findEmployeeById(@PathVariable Long employeeId) {
        EmployeeDto foundEmployee = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(foundEmployee);
    }

    // build Get all employees REST API

    @GetMapping()
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employeeDtos = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDtos);
    }
}
