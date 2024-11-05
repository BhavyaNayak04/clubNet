package com.jsf.clubnet.service;

import com.jsf.clubnet.model.User;
import com.jsf.clubnet.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User register(User user) {
        return userRepository.save(user);
    }
}
