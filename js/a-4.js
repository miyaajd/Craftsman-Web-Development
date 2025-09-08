$(function(){
    // depth2
    $(".nav").hover(function(){
        $(".depth2Bg").fadeIn(300)
    },function(){
        $(".depth2Bg").fadeOut(300)
    })
    // slide
    const slide = $(".slide-list")
    const slideWidth = $(".slide-list li").width()
    const moveSlide = ()=>{
        slide.animate({marginLeft: -slideWidth}, 1000 , function(){
            $(this).append($(this).find("li:first-child"))
            $(this).css({marginLeft:0})
        })
    }
    setInterval(moveSlide , 3000)
    // popup
    $("#first").click(function(){
        $(".modal").fadeIn(300)
    })
    $("#close").click(function(){
        $(".modal").fadeOut(300)
    })
})