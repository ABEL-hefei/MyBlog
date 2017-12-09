package com.able.domain;

import java.sql.Timestamp;
import java.util.List;

public class Article {
	private Long id; // 用户的唯一标识
	
	/**
	 * 文章标题
	 */
	private String title;
	
	/**
	 * 文章标题
	 */
	private String summary;

	private String content;
	
	private String htmlContent; // 将 md 转为 html
 	
	private User user;
	
	/**
	 * 文章创建时间
	 */
	private Timestamp createTime;

	private Integer readSize = 0; // 访问量、阅读量
	 
	private Integer commentSize = 0;  // 评论量

	private Integer voteSize = 0;  // 点赞量
	
	private String tags;  // 标签
	
//	private List<Comment> comments;
//	
//	private List<Vote> votes;
//	
//	private Catalog catalog;
	
}
