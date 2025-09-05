$(function(){
    $("#close").click(function(){
        $(".txt-modal").hide()
    })
    $("#first").click(function(){
        $(".txt-modal").show()
    })
    
    const slideWidth = $(".slide img").width()
    const moveSlide = ()=>{
        slide.animate({marginLeft: -slideWidth},1000,function(){
            $(this).append($(this).find(".slide img:first"))
            $(this).css({marginLeft : 0})
        })
    }
    setInterval(moveSlide, 3000)
})