$(function () {
  $(".nav").mouseenter(function () {
    $(".depth2Bg").addClass("show");
  });
  $(".nav").mouseleave(function () {
    $(".depth2Bg").removeClass("show");
  });
  //   slide
  const slide = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  const moveSlide = () => {
    slide.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({marginLeft:0})
    });
  };
  setInterval(moveSlide, 3000);
//   modal
$("#first").click(function(){
    $(".modal").fadeIn(300)
})
$("#close").click(function(){
    $(".modal").fadeOut(300)
})
});
