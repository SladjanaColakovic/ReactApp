package com.example.demo.model;

import com.example.demo.enumeration.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;
    private String password;
    private String address;
    private Role role;

    public User(String name, String username, String password, String address, Role role) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.address = address;
        this.role = role;
    }
}
