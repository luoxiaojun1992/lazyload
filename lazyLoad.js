(function($) {
    $.fn.extend({
        lazyLoad: function (config) {
            //初始化配置
            var configuration = $.extend({
                'enable': false
            }, config);

            if (configuration.enable) {
                $(this).init();
            }
        },

        load: function () {
            var thisObj = this;

            //获取当前窗口的可见高度
            var windowHeigth = $(window).height();

            //获取当前窗口的可见宽度
            var windowWidth = $(window).width();

            //获取当前窗口的边界
            var top_boundary = $(window).scrollTop();
            var bottom_boundary = $(window).scrollTop() + windowHeigth;
            var left_boundary = $(window).scrollLeft();
            var right_boundary = $(window).scrollLeft() + windowWidth;

            $(thisObj).each(function () {
                //获取图片的origin-src属性
                var origin_src = $(this).attr('origin-src');

                if (origin_src) {
                    //获取图片的绝对位置
                    var offset = $(this).offset();
                    var obj_top_offset = offset.top;
                    var obj_left_offset = offset.left;
                    if (obj_left_offset >= left_boundary && obj_top_offset >= top_boundary && obj_left_offset <= right_boundary && obj_top_offset <= bottom_boundary) {
                        $(this).attr('src', origin_src).removeAttr('origin-src');
                    }
                }
            });
        },

        init: function () {
            $(document).ready(function () {
                // 初始化加载图片
                $(this).load();
            });

            $(window).on('scroll', function () {
                // 滚动加载图片
                $(this).load();
            });
        }
    });
})(jQuery);
