$(function(){
    // modal
    $("#first").click(function(){
        $(".modal").fadeIn(300)
    })
    $("#close").click(function(){
        $(".modal").fadeOut(300)
    })

    // nav
    $(".nav").mouseenter(function(){
        $(".depth2").fadeIn(300)
    })
    $(".nav").mouseleave(function(){
        $(".depth2").fadeOut(300)
    })

    // slide
    const slide = $(".slide-list li")
    let current = 0
    setInterval(function(){
        slide.eq(current).fadeOut(1000)
        current = (current + 1) % slide.length
        slide.eq(current).fadeIn(1000)
    },3000)

    // tab
    const tabBtn = $(".tabBtn a")
    const tabContents = $(".tabContents ul")
    tabBtn.click(function(e){
        e.preventDefault()
        tabBtn.removeClass("active")
        $(this).addClass("active")
        tabContents.removeClass("active")
        tabContents.eq($(this).index()).addClass("active")
    })
})