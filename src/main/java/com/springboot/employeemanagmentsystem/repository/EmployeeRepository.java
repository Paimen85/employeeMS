package com.springboot.employeemanagmentsystem.repository;

import com.springboot.employeemanagmentsystem.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
