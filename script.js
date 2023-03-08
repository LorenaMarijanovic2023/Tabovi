$(document).ready(function(){
  $(".klikni1").click(function(){
    $(".mismoutab1").slideToggle("slow");
    $(".mismoutab1").animate({
      height: '+=2em'
    });
  });
});

$(document).ready(function(){
  $(".klikni2").click(function(){
    $(".mismoutab2").slideToggle("slow");
    $(".mismoutab2").animate({
      fontSize: '2em'
    });
  });
});

$(document).ready(function(){
  $(".klikni3").click(function(){
    $(".mismoutab3").slideToggle("slow");
  });
});

$(document).ready(function(){
  $(".klikni4").click(function(){
    $(".mismoutab4").slideToggle("slow");
  });
});