(function($) {

	$.fn.extend{
    lazyLoad: function(config) {

      //初始化配置
		  var configuration = $.extend({
			  'enable' : false,
		  }, config);

		  if(configuration.enable) {
			  $(this).init();
		  }
    },

    laod: function() {
        var thisObj = this;

				//获取当前窗口的可见高度
				var windowHeigth = $(window).height();

				//获取当前窗口的可见宽度
				var windowWidth = $(window).width();
				$(thisObj).each(function(){

					//获取图片的src属性
					var src = $(this).attr('src');

					//替换图片src属性为src2属性，并移除src属性
					$(this).attr('src2',src).removeAttr('src');

					//获取图片的绝对位置
					var offset = $(this).offset();
					if(offset.left >= $(window).scrollLeft() && offset.top >= $(window).scrollTop() && offset.left <= ($(window).scrollLeft() + windowWidth) && offset.top <= ($(window).scrollTop() + windowHeigth)){
						$(this).attr('src',src).removeAttr('src2').attr('alt','图片已加载！');
					}
				});
    },

    init: function() {
			$(document).ready(function(){
        // 初始化加载图片
		    $(this).load();
			});

			$(window).on('scroll',function(){
        // 滚动加载图片
			  $(this).load();
			});
		}
	};
})(jQuery)

