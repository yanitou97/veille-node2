$(document).on("click", "header ul li:eq(0)", function(){
    $('html, body').animate({
        scrollTop: $("#osaka").offset().top
      }, 300, function(){
        
    })
}); 