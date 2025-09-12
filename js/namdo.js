$(function () {
  // nav
  $(".nav > li").mouseenter(function (e) {
    e.preventDefault();
    $(this).find(".depth2").stop().fadeIn(300);
  });
  $(".nav > li").mouseleave(function (e) {
    e.preventDefault();
    $(this).find(".depth2").stop().fadeOut(300);
  });
  // slide
  const slide = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  const moveSlide = () => {
    slide.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);
  //   popup
  $("#first").click(function(e){
    e.preventDefault()
    $(".modal").fadeIn(300)
  })
  $("#close").click(function(e){
    e.preventDefault()
    $(".modal").fadeOut(300)
  })
});
