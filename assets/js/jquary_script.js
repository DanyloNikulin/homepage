$(document).ready(function(){
  $("button").click(function(){
    if($(this).parent().next("p").length!=0){
        $(this).parent().next("p").slideToggle();
    }
    else{
      $(this).parent().next("ul").slideToggle();
    }
  });
});