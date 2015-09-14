require.config({
	paths: {
		jquery: 'jquery-2.1.4'
	}
});
require(['window','jquery'],function(window,$){
	$('.btn1').click(function(){
		new window.Window().alert(111);
	});
	
});