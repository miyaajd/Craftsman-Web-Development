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

  // slide
  const slide = $(".slide-list li");
  let current = 0;
  setInterval(function () {
    slide.eq(current).fadeOut(1000);
    current = (current + 1) % slide.length;
    slide.eq(current).fadeIn(1000);
  }, 3000);

  //   nav
  $(".nav li").mouseenter(function () {
    $(this).find(".depth2").stop().slideDown(300);
  });
  $(".nav li").mouseleave(function () {
    $(this).find(".depth2").stop().slideUp(300);
  });

  //   tab
  const tabBtn = $(".tabBtn a");
  const tabContents = $(".no-ga ul");
  tabBtn.click(function(e){
    e.preventDefault()
    tabBtn.removeClass("active")
    $(this).addClass("active")
    tabContents.removeClass("active")
    tabContents.eq($(this).index()).addClass("active")
  })
});
