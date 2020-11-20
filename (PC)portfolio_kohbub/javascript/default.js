/* 사이드 메뉴 : right */
$(function(){ //사이드 메뉴 열 때,
    $("header .header_div .right_menu").click(function(){
        $("header .rightside_menu").css("right","0px");
        $("header .rightside_menu").css("transition","0.5s");
        $(".right_menu_background .background").addClass('on');
    })
  });
  $(function(){ //사이드 메뉴 닫을 때,
    $("header .close_btn").click(function(){
        $("header .rightside_menu").css("right","-600px");
        $("header .rightside_menu").css("transition","0.5s");
        $(".right_menu_background .background").removeClass('on');
    })
  });
  