$(function () {
  // modal
  $("#first").click(function () {
    $(".modal").fadeIn(300);
  });
  $("#close").click(function () {
    $(".modal").fadeOut(300);
  });

  // nav
  $(".nav > li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown(300);
  });
  $(".nav > li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(300);
  });

  //   slide
  const slides = $(".slide-list li");
  let current = 0;
  setInterval(function () {
    slides.eq(current).fadeOut(1000);
    current = (current + 1) % slides.length;
    slides.eq(current).fadeIn(1000);
  }, 3000);
});
