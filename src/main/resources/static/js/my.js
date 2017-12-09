
$(document).ready(function(){
	//当前连接高亮
	
	$('nav li a').each(function(){
		if($($(this))[0].href==String(window.location))
			$(this).parent("li").addClass('nav-active');
	});
	
	//菜单下拉
	$(".drop").hover(function(){
			$(".drop-nav").slideToggle(0);
		});
		
		$(".mob-drop").click(function(){
			  $(".mob-dropmenu").slideToggle();

		});
		
		//手机菜单下拉
		$(".mobile-nav").click(function(){
			$(".mob-menu").slideToggle();
		
				$(".mobile-nav .el-lines").toggle();
				$(".mobile-nav .el-remove").toggle();

		});
		
		
		//图标添加
		//$(".mob-menu li").next().find("a").prepend("<i class='el-ok-sign'></i>");
		
//TAB切换
		$(".mytab a").click(function(){
			var index=$(this).index();
			$(this).addClass("tab-active").siblings().removeClass("tab-active");
			$(this).parents(".mytab").find("ul").eq(index).show().siblings('ul').hide();
			
		});
//滚动
                    //文字滚动
                    $(function () {
                        var _wrap = $('.mulitline');//定义滚动区域
                        var _interval = 3000;//定义滚动间隙时间
                        var _moving;//需要清除的动画
                        _wrap.hover(function () {
                            clearInterval(_moving);//当鼠标在滚动区域中时,停止滚动
                        }, function () {
                            _moving = setInterval(function () {
                                var _field = _wrap.find('li:first');//此变量不可放置于函数起始处，li:first取值是变化的
                                var _h = _field.height();//取得每次滚动高度
                                _field.animate({ marginTop: -_h + 'px' }, 500, function () {//通过取负margin值，隐藏第一行
                                    _field.css('marginTop', 0).appendTo(_wrap);//隐藏后，将该行的margin值置零，并插入到最后，实现无缝滚动
                                })
                            }, _interval)//滚动间隔时间取决于_interval
                        }).trigger('mouseleave');//函数载入时，模拟执行mouseleave，即自动滚动
                        if ($(".mulitline li").length <= 1)//小于等于1条时，不滚动
                        {
                            clearInterval(_moving);

                        }

                    });
                   
			
			//邮箱弹窗
			$(".mail-btn").click(function(e){
				
				$(".mail-dy").show();
				
			});
		//返回顶部
			$(function() {
			$(window).scroll(function() {
				if($(this).scrollTop() >= 500) {
					$('#toTop').fadeIn();	
				}  
					else{
					$('#toTop').fadeOut();
				}
			});
		 
			$('#toTop').click(function() {
				$('body,html').animate({scrollTop:0},800);
			});	
			
			
			
			
		});
//表单下拉
$(".form-btn a").click(function(){
			$(".form-zd").slideToggle();
		});

	//弹出分享层
		$(".fx-btn").click(function(){
			  $(".arc-bdfx").show();
			  
		});
		$(".side-fx").click(function(){
			  $(".side-bdfx").show();
			  
		});
		$(".el-remove").click(function(){
			  $(".arc-bdfx").hide();
			  $(".mail-dy").hide();
			  $(".side-bdfx").hide();
		});
		
		//图片查看器

		
		
		
		
});//END Document ready
		
//JS区域

