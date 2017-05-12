package com.backend2.dao;

import com.backend2.model.ProfilePicture;

public interface ProfileUploadDao {
void save(ProfilePicture profilePicture);
ProfilePicture getProfilePic(String username);
}