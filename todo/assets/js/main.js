$("ul").on("click", "li", function(){
    $(this).toggleClass("clickedLi");
})

//$("li").hover(function(){
//    $(this).toggleClass("spanShow");
//})


$( "ul" ).on("click", "span", function(e) {
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  })
    e.stopPropagation();
});

$("input").keypress(function(e){
    if(event.which === 13){
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +toDoText+ "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});