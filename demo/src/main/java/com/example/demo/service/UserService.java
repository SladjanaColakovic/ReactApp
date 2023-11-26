package com.example.demo.service;

import com.example.demo.dto.EditUserDTO;
import com.example.demo.dto.NewUserDTO;
import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User getById(Long id);
    User edit(EditUserDTO editUser);
    User register(NewUserDTO newUser);
    void delete(Long id);
}
