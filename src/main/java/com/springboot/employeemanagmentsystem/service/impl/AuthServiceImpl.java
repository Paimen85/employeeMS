package com.springboot.employeemanagmentsystem.service.impl;

import com.springboot.employeemanagmentsystem.dto.LoginDto;
import com.springboot.employeemanagmentsystem.dto.RegisterDto;
import com.springboot.employeemanagmentsystem.entity.Role;
import com.springboot.employeemanagmentsystem.entity.User;
import com.springboot.employeemanagmentsystem.exception.EmployeeApiException;
import com.springboot.employeemanagmentsystem.exception.ResourceNotFoundException;
import com.springboot.employeemanagmentsystem.repository.RoleRepository;
import com.springboot.employeemanagmentsystem.repository.UserRepository;
import com.springboot.employeemanagmentsystem.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@AllArgsConstructor
public class AuthServiceImpl implements AuthService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    @Override
    public String register(RegisterDto registerDto) {

        // check username is already exist in database

        if (userRepository.existsByUsername(registerDto.getUsername())) {
            throw new EmployeeApiException(HttpStatus.BAD_REQUEST, "Username is already created!");
        }

        // check email is already exist in database

        if (userRepository.existsByEmail(registerDto.getEmail())){
            throw new EmployeeApiException(HttpStatus.BAD_REQUEST, "Username with this email is already created!");
        }

        User user = new User();
        user.setName(registerDto.getName());
        user.setUsername(registerDto.getUsername());
        user.setEmail(registerDto.getEmail());
        user.setPassword(passwordEncoder.encode(registerDto.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName("ROLE_USER");
        roles.add(userRole);

        user.setRoles(roles);

        userRepository.save(user);
        return "User registered successfully";
    }

    @Override
    public String login(LoginDto loginDto) {
        Authentication authentication =  authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
               loginDto.getUsernameOrEmail(),
               loginDto.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return "User logged in successfully";
    }
}
