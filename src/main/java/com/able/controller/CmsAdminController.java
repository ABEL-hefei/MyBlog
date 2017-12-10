package com.able.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.able.vo.Menu;
/**
 * 后台管理控制器
 * @author Administrator
 *
 */
@Controller
public class CmsAdminController {
	
    @GetMapping("/admin")
    public ModelAndView listUsers(Model model) {
        List<Menu> list = new ArrayList<>();
        list.add(new Menu("报告", "/"));
        list.add(new Menu("文章", "/"));
        list.add(new Menu("公告", "/"));
        list.add(new Menu("评论", "/"));
        list.add(new Menu("留言", "/"));
        list.add(new Menu("栏目", "/"));
        list.add(new Menu("其他", "/"));
        list.add(new Menu("用户", "/"));
        list.add(new Menu("设置", "/"));
        model.addAttribute("list", list);
        return new ModelAndView("/cms/main", "model", model);
    }
}
