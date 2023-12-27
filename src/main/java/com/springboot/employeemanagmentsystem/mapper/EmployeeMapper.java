package com.springboot.employeemanagmentsystem.mapper;

import com.springboot.employeemanagmentsystem.dto.EmployeeDto;
import com.springboot.employeemanagmentsystem.entity.Employee;

public class EmployeeMapper {


    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
