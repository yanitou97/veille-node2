$(window).on('load', function(){
    $("header").css('height', $(window).height()-60);
    $("main div").css('height', $(window).height()-60);
});
$(document).on("click", "header ul li:eq(0)", function(){
    $('html, body').animate({
        scrollTop: $("#osaka").offset().top
      }, 300, function(){
    })
});
$(document).on("click", "header ul li:eq(1)", function(){
    $('html, body').animate({
        scrollTop: $("#tokyo").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
$(document).on("click", "header ul li:eq(2)", function(){
    $('html, body').animate({
        scrollTop: $("#hakone").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
$(document).on("click", "header ul li:eq(3)", function(){
    $('html, body').animate({
        scrollTop: $("#montFuji").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
$(document).on("click", "header ul li:eq(4)", function(){
    $('html, body').animate({
        scrollTop: $("#disneyLandJapan").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
$(document).on("click", "header ul li:eq(5)", function(){
    $('html, body').animate({
        scrollTop: $("#universalStudiosJapan").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
$(document).on("click", "header ul li:eq(6)", function(){
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
      }, 300, function(){
        
    })
    $('header ul').addClass('fixed');
});
