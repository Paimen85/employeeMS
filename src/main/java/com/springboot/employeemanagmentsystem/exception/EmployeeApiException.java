package com.springboot.employeemanagmentsystem.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public class EmployeeApiException extends RuntimeException{

    private HttpStatus status;
    private String message;
}
