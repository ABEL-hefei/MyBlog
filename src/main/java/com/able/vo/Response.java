package com.able.vo;

/**
 * 返回对象.
 * @author hefei
 */
public class Response {
	
    private boolean result; // 处理是否成功
    private String msg; // 处理后消息提示
    private Object data; // 返回数据
    
    public Response(boolean result, String msg) {
		super();
		this.result = result;
		this.msg = msg;
	}
    
	public Response(boolean result, String msg, Object data) {
		super();
		this.result = result;
		this.msg = msg;
		this.data = data;
	}
	public boolean isResult() {
		return result;
	}
	public void setResult(boolean result) {
		this.result = result;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
    
	
}
