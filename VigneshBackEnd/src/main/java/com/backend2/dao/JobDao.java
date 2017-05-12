package com.backend2.dao;

import java.util.List;

import com.backend2.model.Job;

public interface JobDao {
	void saveJobDetails(Job job);
	List<Job> getAllJobDetails();
	Job getJobById(int id);
}
