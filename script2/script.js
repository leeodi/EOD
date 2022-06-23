jQuery(document).ready(function(){
    $('.nav').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
        $('#mwrap').stop().animate({
            'height':'220px'
        });
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
        $('#mwrap').stop().animate({
            'height':'100px'
        });
    });

    var imgs=2;
    var now=0;

    start();

    function start(){
        $(".slide>a").eq(0).siblings().animate({
            width:"-1200px"
        });
    
    setInterval (function(){
        now=now==imgs?0:now+=1;
        $(".slide>a").eq(now-1).animate({
            width: "-1200px"
        });
        $(".slide>a").eq(now).animate({
            width:"1200px"
        });
    },6000);
    }

    
        $("#layer").addClass("active");
    });
    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });
