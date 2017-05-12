package com.backend2.dao;

import java.util.List;

import com.backend2.model.BlogComment;
import com.backend2.model.BlogPost;

public interface BlogDao {
void saveBlogPost(BlogPost blogPost);
public List<BlogPost> getBlogPosts(int approved);
public BlogPost getBlogPostById(int id);
void addBlogComment(BlogComment blogComment);
List<BlogComment> getBlogComments(int blogPostId);
void update(BlogPost blogPost);
}