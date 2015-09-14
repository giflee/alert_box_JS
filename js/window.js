define(['jquery'],function($){//定义模块
	function Window(){};//定义构造函数
	Window.prototype={//对象字面量的方式定义原型方法
		alert: function(content){
			var alert_box = $('<div class="alert_box"></div>');
			alert_box.appendTo("body");
			$('.alert_box').html(content);
			var alert_btn = $('<input class="alert_btn" type="button" value="确定"/>');
			alert_btn.appendTo(alert_box);
			$('.alert_btn').click(function(){
				$('.alert_box').remove();
			});
		}
	};
	return {
		Window: Window//将Window暴露出来
	};
});