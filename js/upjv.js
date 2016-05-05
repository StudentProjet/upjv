var $ = jQuery;

$(document).ready(function() {

    $("a[href='#page']").bind('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    if($('#menu_principal li a').hasClass("is-active")){
        $('#menu_principal li a.is-active').css("color","#666666");
    }
    
    if($('#menu_principal li ul li a').hasClass("is-active")){
        $('#menu_principal li ul li a.is-active').parent().parent().css("display", "block");
        $('#menu_principal li ul li a.is-active').parent().parent().prev().css("color","#666666");
        $('#menu_principal li ul li a.is-active').css("color","#FFF");
    }

});