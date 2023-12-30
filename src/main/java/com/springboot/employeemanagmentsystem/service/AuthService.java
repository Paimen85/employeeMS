package com.springboot.employeemanagmentsystem.service;

import com.springboot.employeemanagmentsystem.dto.LoginDto;
import com.springboot.employeemanagmentsystem.dto.RegisterDto;

public interface AuthService {

    String register(RegisterDto registerDto);
    String login(LoginDto loginDto);
}
