$(function(){
    const slide = $(".slide-list")
    const slideWidth = $(".slide-list li").width()
    const moveSlide = () =>{
        slide.animate({marginLeft: -slideWidth}, 1000, function(){
            $(this).append($(this).find("li:first-child"))
            $(this).css({marginLeft:0})
        })
    }
    setInterval(moveSlide , 3000)
    // tab
    $(".no-ga > li > a").click(function(e){
        e.preventDefault()
        $(this).parent().addClass("active").siblings().removeClass("active")
    })
    $("#first").click(function(){
        $(".modal").fadeIn(300)
    })
    $("#close").click(function(){
        $(".modal").fadeOut(300)
    })
})