//页面加载完执行的动作
$(function(){
	//获取用户列表
	$("#aside").on("click","#userList",function (){
		getUserList();
	});
	
	//点击添加用户获取页面
	getAddUser();
	//获取修改用户页面
	getEditUser();
	//点击添加用户提交
	
	/**
	 * 提交添加用户中的表单
	 * @returns
	 */
	$("#addUser").delegate("#submitAndUser", "click",function (){
	// 模态框id 				点击事件的id
		submitAddUser();
		//关闭模态框
        $('#addUser').modal('hide');
	});
	
	/**
	 * 提交编辑用户表单
	 * @returns
	 */
	$("#addUser").delegate("#submitEditUser", "click",function (){
		submitEditUser();
		//关闭模态框
        $('#addUser').modal('hide');
	});
	
});



/**
 * 获取用户列表
 * @returns
 * @author hefei
 */
function getUserList(){
	//在左侧功能键加载完成后点击用户管理执行的动作
	$.ajax({ 
        url: "/user/userList", 
        contentType : 'application/json',
        data:{
//	            "async":true, 
//	            "pageIndex":pageIndex,
//	            "pageSize":pageSize,
//	            "name":$("#searchName").val()
        },
        success: function(data){
            $("#main").html(data);
        },
        error : function() {
            toastr.error("error!");
        }
    });
}

/**
 * 点击获取添加用户页面
 * @returns
 * @author hefei
 */
function getAddUser(){
	// 获取添加用户的界面
	$("#main").on("click","#addUserModal",function (){ 
	    $.ajax({ 
	         url: "/user/add", 
	         success: function(data){
	             $("#addUser").html(data);
	         },
	         error : function(data) {
//	             toastr.error("error!");
	         }
	     });
	});
}

/**
 * 点击获取修改用户页面
 * @returns
 * @author hefei
 */
function getEditUser(){
	// 获取编辑用户的界面
   $("#main").on("click","#editUser", function () { 
   	console.log($(this).attr("userId"));
       $.ajax({ 
            url: "/user/edit/" + $(this).attr("userId"), 
            type: "GET",
            cache: false, //不缓存此页面 
            success: function(data){
           		$("#addUser").html(data);
            },
            error : function() {
                toastr.error("error!");
            }
        });
   });
}

/**
 * 新增用户点击提交
 */
function submitAddUser(){
	// 提交变更后，清空表单
    $.ajax({ 
         url: "/user/addUserForm", 
         type: 'POST',
         data:$('#addUserForm').serialize(),
         success: function(data){
             if (data.result) {
                 // 从新刷新主界面
            	 getUserList();
             } else {
                 toastr.error(data.message);
             }

         },
         error : function() {
             toastr.error("error!");
         }
//         //关闭模态框
//         $('#addUser').modal('hide');
     });
}

/**
 * 修改点击提交
 */
function submitEditUser(){
	// 提交变更后，清空表单
    $.ajax({ 
         url: "/user/addUserForm", 
         type: 'POST',
         data:$('#editUserForm').serialize(),
         success: function(data){
             if (data.result) {
            	 //刷新页面
            	 getUserList();
             } else {
                 toastr.error(data.message);
             }
             //关闭模态框
             $('#addUser').modal('hide');
         },
         error : function() {
             toastr.error("error!");
         }
    });
}
