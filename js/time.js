$(document).ready(function(){
//	++24小时执行一次清空
//  ++++  1.如果不是0:00:00,则
//  ++++++  1)若是 >= 15:00:00,则
//  ++++++++  ①执行setTimeout一个距离12点的时间
//  ++++++++  ②再执行clear()
//  ++++++++  ③同时执行setInterval(clear(),86400000)
//  ++++++  2)若是   < 15:00:00,则
//  ++++++++  ①执行一次clear()
//  ++++++++  ②同时执行setTimeout(setInterval(clear(),86400000),距离12点的时间)
//  ++++  2.如果是0:00:00,则
//  ++++++  1)执行一次clear()
//  ++++++  2)执行setInterval(clear(),86400000)
//  --取15:00:00的时间
//	--不到10的添加0
//  --24小时制
	var hr,min,sec;
	var t_h = 14,t_m = 59,t_s = 59;
	var date2 = new Date();
	var n_h = date2.getHours();
	var n_m = date2.getMinutes();
	var n_s = date2.getSeconds();
	var time_dis = parseInt((23 - n_h)*3600000 + (59 - n_m)*60000 + (59 - n_s)*1000);
	
	if (n_h == 0&&n_m == 0&&n_s == 0) {
		clear();
		setInterval("clear",86400000);
	}else{
		if (n_h < 15&&n_m < 60&&n_s < 60) {
			clear();
			setTimeout(func2,time_dis);
		}
		else{
			setTimeout(func1,time_dis);
		}
	} 
	var dm_pos = 59 - date2.getMinutes();
	var ds_pos = 59 - date2.getSeconds();
	
	function func1(){
		clear();
		setInterval(clear(),86400000);
	}
	function func2(){
		setInterval(clear(),86400000);
	}
	function clear(){
		var interval1 = setInterval(timer,1000);
	}
	function timer(){
		var date = new Date();
		var date1 = date.getTime();
		var day = date.getDay();
		hr = date.getHours();
		min = date.getMinutes();
		sec = date.getSeconds();
		var hr_pos = t_h - hr;
		var min_pos = t_m - min;
		var sec_pos = t_s - sec;
//		alert(hr);
		if (hr_pos == 0&&min_pos == 0&&sec_pos == -1) {
			clearInterval(interval1);
		}
		if (hr_pos < 10) {
			hr_pos = "0" + hr_pos;
		}
		if (min_pos < 10) {
			min_pos = "0" + min_pos;
		}
		if (sec_pos < 10) {
			sec_pos = "0" + sec_pos;
		}
		if (hr_pos >= 0&&min_pos >= 0&&sec_pos >= -1) {
			$("#span1").html(hr_pos);
			$("#span2").html(min_pos);
			$("#span3").html(sec_pos);
		}
	}
	var loading = function(canvas,options){
		this.canvas = $("#canvas");
	}
})