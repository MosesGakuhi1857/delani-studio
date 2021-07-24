
// start of jquery/

$(document).ready(function(){
$(".image-content").click(function(){
$(".content").toggle()
$(".image-content").toggle()
})
$(".content").click(function(){
    $(".image-content").toggle()
     $(".content").hide()
})



})