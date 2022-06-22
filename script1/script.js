jQuery(document).ready(function(){
    $('.nav>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    var imgs=2;
    var now=0;

    start();

    function start(){
        $(".slide>a").eq(0).siblings().animate({
            width:"-800px"
        });

    setInterval (function(){
        now=now==imgs?0:now+=1;
    $(".slide>a").eq(now-1).animate({width:"-800px"});
    
    $(".slide>a").eq(now).animate({width:"800px"});},3000);
        
    }

    $(".con1 li:first-child").click(function(){
        $("#pop").addClass("active");
    });
    $(".btn").click(function(){
        $("#pop").removeClass("active");
    });
});