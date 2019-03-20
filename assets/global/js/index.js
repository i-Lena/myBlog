/**
 * @Author : Nana
 * @Date : 2019/3/19 17:14
 * @Version 1.0
 */
/*
*  index.js
* */
/* 文章右侧图片的缩放效果 */
$(function () {
   $(".artImg").mouseenter(function () {
      $(this).css("transform","scale(1.2)");
   });
   $(".artImg").mouseleave(function () {
        $(this).css("transform","scale(1)");
   });
});