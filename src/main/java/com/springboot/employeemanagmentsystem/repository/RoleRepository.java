package com.springboot.employeemanagmentsystem.repository;

import com.springboot.employeemanagmentsystem.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
