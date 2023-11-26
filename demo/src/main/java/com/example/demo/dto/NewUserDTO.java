package com.example.demo.dto;

import com.example.demo.enumeration.Role;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NewUserDTO {
    private String name;
    private String username;
    private String password;
    private String address;
    private Role role;

}
