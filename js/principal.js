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
});
$(document).on("click", "header ul li:eq(2)", function(){
    $('html, body').animate({
        scrollTop: $("#hakone").offset().top
      }, 300, function(){
        
    })
});