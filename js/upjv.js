var $ = jQuery;

$(document).ready(function() {

    $("a[href='#page']").bind('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});