package com.able.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.able.domain.User;

/**
 * User UserRepository接口
 * @author Administrator
 *
 */
public interface UserRepository extends JpaRepository<User, Long>{

	/**
	 * 根据名称进行模糊查询并进行分页处理
	 * @param name
	 * @param pageable
	 * @return
	 */
	Page<User> findByNameLike(String name,Pageable pageable);
	
	User findByUsername(String username);
}
