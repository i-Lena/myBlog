/**
 * @Author : Nana
 * @Date : 2019/3/19 17:14
 * @Version 1.0
 */
/*index.js*/
$(function () {
    /* 右侧侧边栏的显示与隐藏 */
    $("#sideBarBtn").click(function () {
        if($(".sideBar").hasClass("layui-hide")) {
            /* sideBar 展开与隐藏 */
            $(".sideBar").addClass("layui-show");
            $(".sideBar").removeClass("layui-hide");
            /* sideBarBtn 图标更换*/
            $("#sideBarBtn i").removeClass("fa-navicon (alias)").addClass("fa-close (alias)");
            /* container宽度更改 */
            $(".container").css("margin-right","320px");
        } else {
            /* sideBar 展开与隐藏 */
            $(".sideBar").addClass("layui-hide");
            $(".sideBar").removeClass("layui-show");
            /* sideBarBtn 图标更换*/
            $("#sideBarBtn i").removeClass("fa-close (alias)").addClass("fa-navicon (alias)");
            /* container宽度更改 */
            $(".container").css("margin-right","0px");
        }
    });

    /* 返回顶部 */
    var timer = null;
    var isTop = true;
    //获取页面的可视窗口高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //滚动条滚动时触发
    $(document).scroll(function () {
        //在滚动时增加判断
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.info(clientHeight);
        // console.info(osTop);
        if(osTop > 0) {
            $("#backToTop").css("display","block");
        }else {
            $("#backToTop").css("display","none");
        }
        //主要用于判断当点击后，滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop) {
            clearInterval(timer);
        }
        isTop = false;
    });
    $("#backToTop").click(function () {
        timer = setInterval(function () {
            //获取滚动条距离顶部的高度
            var osTop = $(document).scrollTop() || $("body").scrollTop();
            // console.info(osTop);
            //减小的速度
            var isSpeed = Math.floor(-osTop /6);
            // console.info(isSpeed);
            $(document).scrollTop(osTop + isSpeed);
            $("body").scrollTop(osTop + isSpeed);
            // console.info(osTop + isSpeed);
            isTop = true;
            //判断，然后清除定时器
            if(osTop ==0) {
                clearInterval(timer);
            }
        },30);
    });
});


