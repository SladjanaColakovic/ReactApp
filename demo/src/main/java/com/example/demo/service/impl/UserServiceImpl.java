package com.example.demo.service.impl;

import com.example.demo.dto.EditUserDTO;
import com.example.demo.dto.NewUserDTO;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User edit(EditUserDTO editUser) {
        User user = userRepository.findById(editUser.getId()).orElse(null);
        if(user == null){
            return null;
        }
        user.setAddress(editUser.getAddress());
        user.setName(editUser.getName());
        user.setUsername(editUser.getUsername());
        return userRepository.save(user);
    }

    @Override
    public User register(NewUserDTO newUser) {
        User user = new User(newUser.getName(), newUser.getUsername(), passwordEncoder.encode(newUser.getPassword()), newUser.getAddress(), newUser.getRole());
        return userRepository.save(user);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
