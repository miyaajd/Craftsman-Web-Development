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
  // nav
  $(".nav").mouseenter(function () {
    $(".depth2").fadeIn(300);
    $(".depth2Bg").fadeIn(300);
  });
  $(".nav").mouseleave(function () {
    $(".depth2").fadeOut(300);
    $(".depth2Bg").fadeOut(300);
  });
  // slide
  const slide = $(".slide-list");
  const slideHeight = $(".slide-list li").height();
  const moveSlide = () => {
    slide.animate({ marginTop: -slideHeight }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginTop: 0 });
    });
  }; setInterval(moveSlide,3000)
});
