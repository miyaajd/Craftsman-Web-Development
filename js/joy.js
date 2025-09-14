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
  $(".nav > li").mouseenter(function () {
    $(this).find(".depth2").slideDown(300);
  });
  $(".nav > li").mouseleave(function () {
    $(this).find(".depth2").slideUp(300);
  });

  // slide
  const slide = $(".slide-list");
  const slideHeight = $(".slide-list li").height();
  const moveSlide = () => {
    slide.animate({ marginTop: -slideHeight }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginTop: 0 });
    });
  };
  setInterval(moveSlide, 3000);

  //   tab
  const tabBtn = $(".tabBtn a")
  const tabCon = $(".tabContents ul")
  tabBtn.click(function(e){
    e.preventDefault()
    tabBtn.removeClass("active")
    $(this).addClass("active")
    tabCon.removeClass("active")
    tabCon.eq($(this).index()).addClass("active")
  })
});
