1、搭建项目 springboot
2、将静态页面引入
3、集成thymeleaf
	build.gredle中引入依赖
	1)添加 Thymeleaf 的依赖
		compile('org.springframework.boot:spring-boot-starter-thymeleaf')
	2)自定义  Thymeleaf 和 Thymeleaf Layout Dialect 的版本，覆盖spring-boot-starter-thymeleaf依赖中默认的版本配置
		ext['thymeleaf.version'] = '3.0.3.RELEASE'
		ext['thymeleaf-layout-dialect.version'] = '2.2.0'
	3)修改配置
		# 设置编码格式
		spring.thymeleaf.encoding=UTF-8
		# 热部署静态文件，不需要缓存，能实时看到修改的
		spring.thymeleaf.cache=false
		# 使用HTML5标准，thymeleaf模式
		spring.thymeleaf.mode=HTML5