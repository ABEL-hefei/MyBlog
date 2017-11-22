package com.able.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

//@RestController 返回的是一个对象，在没有页面的情况下，也能看到返回的是一个user对象对应的json字符串，而前端的作用是利用返回的json进行解析渲染页面
@Controller
public class MainController {

	@GetMapping("/")
	public String root() {
		return "redirect:index";
	}
	
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	@GetMapping("/content")
	public String content() {
		return "content";
	}
}
