$(function () {
  $(".nav > li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown(300);
  });
  $(".nav > li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(300);
  });
  //   modal
  $("#first").click(function () {
    $(".modal").fadeIn(300);
  });
  $("#close").click(function () {
    $(".modal").fadeOut(300);
  });
  // tab
  const tabBtn = $(".tabBtn a ");
  const tabContnet = $(".no-ga ul");
  $(tabBtn).click(function (e) {
    e.preventDefault();
    tabBtn.removeClass("active");
    $(this).addClass("active");
    tabContnet.removeClass("show");
    tabContnet.eq($(this).index()).addClass("show");
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
