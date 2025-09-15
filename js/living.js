$(function () {
  // modal
  $("#first").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(300);
  });
  $("#close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(300);
  });

  //   slide
  const slide = $(".slide-list li");
  let current = 0;
  setInterval(function () {
    slide.eq(current).fadeOut(1000);
    current = (current + 1) % slide.length;
    slide.eq(current).fadeIn(1000);
  }, 3000);

  //   nav
  $(".nav").mouseenter(function(){
    $(".depth2Bg").stop().fadeIn(300)
    $(".depth2").stop().fadeIn(300)
  })
  $(".nav").mouseleave(function(){
    $(".depth2Bg").stop().fadeOut(300)
    $(".depth2").stop().fadeOut(300)
  })
});
