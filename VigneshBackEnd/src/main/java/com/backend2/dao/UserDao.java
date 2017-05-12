package com.backend2.dao;

import java.util.List;

import com.backend2.model.User;

public interface UserDao {
User registerUser(User user);
User login(User user);
void updateUser(User user);
User getUser(int id);

}