package com.able.controller;

import java.util.List;

import javax.validation.ConstraintViolationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.able.domain.User;
import com.able.service.UserService;
import com.able.util.ConstraintViolationExceptionHandler;
import com.able.vo.Response;

@Controller
@RequestMapping("user")
public class CmsUserController {

	@Autowired
	private UserService userService;
	
	/**
	 * 查询用户列表
	 * @param model
	 * @return
	 */
	@GetMapping("/userList")
	public ModelAndView userList(@RequestParam(value="async",required=false) boolean async,
            @RequestParam(value="pageIndex",required=false,defaultValue="0") int pageIndex,
            @RequestParam(value="pageSize",required=false,defaultValue="10") int pageSize,
            @RequestParam(value="name",required=false,defaultValue="") String name,
            Model model) {
		Pageable pageable = new PageRequest(pageIndex, pageSize);
        Page<User> page = userService.listUsersByNameLike(name, pageable);
        List<User> list = page.getContent();    // 当前所在页面数据列表
        
		model.addAttribute("userList", list);
		model.addAttribute("title", "管理");
		model.addAttribute("page", page);
		return new ModelAndView(async==true?"cms/user :: #mainContainerRepleace":"cms/user", "userModel", model);
	}
	
	/**
	 * 获取创建用户表单页面
	 * @param model
	 * @return
	 */
	@GetMapping("/add")
	public ModelAndView addUser(Model model) {
		model.addAttribute("user", new User(null, null, null, null));
		model.addAttribute("title", "新增用户");
		return new ModelAndView("cms/user-add","userModel",model);
	}
	
	 /**
     * 获取修改用户的界面
     * @param id
     * @param model
     * @return
     */
    @GetMapping(value = "edit/{id}")
    public ModelAndView modifyUserForm(@PathVariable("id") Long id, Model model) {
        User user = userService.getUserById(id);
        model.addAttribute("user", user);
        return new ModelAndView("cms/user-edit", "userModel", model);
    }
    
	/**
	 * 保存或修改用户
	 * @param user
	 * @return
	 */
	@PostMapping("addUserForm")
	public ResponseEntity<Response> saveOrUpdateUser(User user){
		try {
            userService.saveOrUpdateUser(user);
        }  catch (ConstraintViolationException e)  {
            return ResponseEntity.ok().body(new Response(false, ConstraintViolationExceptionHandler.getMessage(e)));
        }
        return ResponseEntity.ok().body(new Response(true, "处理成功", user));
	}
	
    /**
     * 删除用户
     * @param id
     * @param model
     * @return
     */
    @DeleteMapping(value = "delete/{id}")
    public ResponseEntity<Response> delete(@PathVariable("id") Long id, Model model) {
        try {
            userService.removeUser(id);
        } catch (Exception e) {
            return  ResponseEntity.ok().body( new Response(false, e.getMessage()));
        }
        return  ResponseEntity.ok().body( new Response(true, "处理成功"));
    }
	
}
