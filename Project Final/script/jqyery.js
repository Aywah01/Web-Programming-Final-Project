$(document).ready(function(){

//메뉴
    $(".navi_box > ul > li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });

    $(".navi_box > ul > li").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });

// 탭메뉴
    $(".tab > .gallery > a").siblings().css("display", "none");
        $(".tab > li> a").click(function(){
            $(".tab > li > a").siblings().css("display", "none");
            $(this).siblings().css("display", "block");
            return false; /* a태그값을 실행말고, jQuery를 먼저 실행 */
        });

// 팝업창
        $("#open").click(function(){
            $("#popup").css("display", "block");
        });
        $("#close").click(function(){
            $("#popup").css("display", "none");
        });

});










