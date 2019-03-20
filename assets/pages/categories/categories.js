/**
 * @Author : Nana
 * @Date : 2019/3/20 10:03
 * @Version 1.0
 */
/* categories JS */
$(function () {
    //折叠面板 依赖 element 模块，否则无法进行功能性操作
    layui.use('element',function () {
       var element = layui.element;
    });

    $(".categoriesItemTitle").click(function () {
        if($(".oprBtn").hasClass("fa-minus")) {
            $(".categoriesItemContent").slideUp();
            $(".oprBtn").removeClass("fa-minus").addClass("fa-plus");

        }else {
            $(".categoriesItemContent").slideDown();
            $(".oprBtn").removeClass("fa-plus").addClass("fa-minus");
        }
    });
});