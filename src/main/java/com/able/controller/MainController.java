package com.able.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.able.domain.User;
import com.able.service.UserService;

/**
 * @author hefei
 * @author Administrator
 */
//@RestController 返回的是一个对象，在没有页面的情况下，也能看到返回的是一个user对象对应的json字符串，而前端的作用是利用返回的json进行解析渲染页面
@Controller
public class MainController {
	
	@Autowired
	private UserService userService;
	/**
	 * 根目录直接重定向到首页
	 * @return
	 */
	@GetMapping("/")
	public String root() {
		return "redirect:index";
	}
	
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	@GetMapping("/message")
	public String message() {
		return "message";
	}
	
	@GetMapping("/shuoList")
	public String shuoList() {
		return "shuoList";
	}
	
	@GetMapping("/about")
	public String about() {
		return "about";
	}
	
	@GetMapping("/album")
	public String album() {
		return "album";
	}
	
	/**
	 * 链接到管理员登陆页面
	 * @return
	 */
	@GetMapping("/login")
	public String login() {
		return "cms/index";
	}
	
	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("loginError", true);
		model.addAttribute("errorMsg", "登陆失败，用户名或者密码错误！");
		return "login";
	}
	
	@GetMapping("/register")
	public String registerUser(User user) {
		user = userService.registerUser(user);
//		model.addAttribute("loginError", true);
//		model.addAttribute("errorMsg", "登陆失败，用户名或者密码错误！");
		return "login";
	}
	
}
