$(function () {
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
  const slideWidth = $(".slide-list li").width();
  const moveSlide = () => {
    slide.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);

  //   modal
  $("#first").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(300);
  });
  $("#close").click(function (e) {
    e.preventDefault();
    $(".modal").fadeOut(300);
  });

  //   tab
  const tabBtn = $(".tabBtn a");
  const tabContents = $(".no-ga ul");
  tabBtn.click(function (e) {
    e.preventDefault();
    tabBtn.removeClass("active");
    $(this).addClass("active");
    tabContents.removeClass("active");
    tabContents.eq($(this).index()).addClass("active");
  });
});
