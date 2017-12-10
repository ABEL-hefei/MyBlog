package com.able.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.able.domain.User;

public interface UserService {

	/**
	 * 新增 修改用户
	 * @param user
	 * @return
	 */
	User saveOrUpdateUser(User user);
	
	/**
	 * 注册用户
	 * @param user
	 * @return
	 */
	User registerUser(User user);
	
	/**
	 * 根据用户id删除用户
	 * @param id
	 */
	void removeUser(Long id);
	
	/**
	 * 根据id获取用户
	 * @param id
	 * @return
	 */
	User getUserById(Long id);
	
	Page<User> listUsersByNameLike(String name,Pageable pageable);
}
