(function($)
{

	$.fn.Lazyload = function(ops)
	{
		ops = $.extend({
			'enable' : false,
			'obj' : 'body'
		},ops);

		if(ops.enable) {
			init();
		}

    function load()
    {
				//获取当前窗口的可见高度
				var windowHeigth = jQuery(window).height();

				//获取当前窗口的可见宽度
				var windowWidth = jQuery(window).width();
				jQuery(ops.obj).find('img').each(function(){

					//获取图片的src属性
					var src = jQuery(this).attr('src');

					//替换图片src属性为src2属性，并移除src属性
					jQuery(this).attr('src2',src).removeAttr('src');

					//获取图片的绝对位置
					var offset = jQuery(this).offset();
					if(offset.left >= jQuery(window).scrollLeft() && offset.top >= jQuery(window).scrollTop() && offset.left <= (jQuery(window).scrollLeft() + windowWidth) && offset.top <= (jQuery(window).scrollTop() + windowHeigth)){
						jQuery(this).attr('src',src).removeAttr('src2').attr('alt','图片已加载！');
					}
				});
    }

		function init()
		{
			jQuery(document).ready(function(){
        // 初始化加载图片
		    load();
			});

			jQuery(window).on('scroll',function(){
        // 滚动加载图片
			  load();
			});
		}
	};
})(jQuery)
