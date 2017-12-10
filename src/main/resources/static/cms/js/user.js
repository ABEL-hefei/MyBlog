//页面加载完执行的动作
	//获取用户列表
	getUserList();
	//点击添加用户获取页面
	getAddUser();
	//获取修改用户页面
	getEditUser();
	//点解添加用户提交
	submitAddUser();
	//点击编辑用户提交
	submitEditUser();
	
	
$("#aaa").click(function(){
	alert(2345);
});

/**
 * 获取用户列表
 * @returns
 * @author hefei
 */
function getUserList(){
	//在左侧功能键加载完成后点击用户管理执行的动作
	$("#aside").on("click","#userList",function (){ 
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
 * 新增和修改点击提交
 */
function submitAddUser(){
	// 提交变更后，清空表单
    $("#submitAddUser").click(function() {
        $.ajax({ 
             url: "/user/addUserForm", 
             type: 'POST',
             data:$('#addUserForm').serialize(),
             success: function(data){
                 $('#addUserForm')[0].reset();  
                 if (data.success) {
                     // 从新刷新主界面
                     getUersByName(0, _pageSize);
                 } else {
                     toastr.error(data.message);
                 }

             },
             error : function() {
                 toastr.error("error!");
             }
         });
    });
}

/**
 * 修改点击提交
 */
function submitEditUser(){
	alert(2222);
//	debugger;
	// 提交变更后，清空表单
	$("#main").on("click","#submitEditUser", function () { 
    	alert(1111);
        $.ajax({ 
             url: "/user/addUserForm", 
             type: 'post',
             data:$('#editUserForm').serialize(),
             success: function(data){
            	 alert(111111);
                 $('#editUserForm')[0].reset();  
                 if (data.success) {
                     // 从新刷新主界面
                     getUersByName(0, _pageSize);
                 } else {
                     toastr.error(data.message);
                 }

             },
             error : function() {
                 toastr.error("error!");
             }
         });
    });
}

//// 分页
//$.tbpage("#mainContainer", function (pageIndex, pageSize) {
//    getUersByName(pageIndex, pageSize);
//    _pageSize = pageSize;
//});




/**
 * 点击提交
 * @returns
 */


// 删除用户
$("#rightContainer").on("click",".blog-delete-user", function () { 

	// 获取 CSRF Token 
    var csrfToken = $("meta[name='_csrf']").attr("content");
    var csrfHeader = $("meta[name='_csrf_header']").attr("content");
    
    $.ajax({ 
         url: "/users/" + $(this).attr("userId") , 
         type: 'DELETE', 
         beforeSend: function(request) {
//             request.setRequestHeader(csrfHeader, csrfToken); // 添加  CSRF Token 
         },
         success: function(data){
             if (data.success) {
                 // 从新刷新主界面
                 getUersByName(0, _pageSize);
             } else {
                 toastr.error(data.message);
             }
         },
         error : function() {
             toastr.error("error!");
         }
     });
});
//
//if (window.confirm("此操作不可逆，是否确认？")) {
//    $.ajax({
//        type: "POST",
//        url: "/User/delete",
//        data: "id=" + id,
//        cache: false, //不缓存此页面   
//        success: function (data) {
//            window.location.reload();
//        }
//    });
//}
//
//        
