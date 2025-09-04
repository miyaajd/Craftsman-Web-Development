$(function () {
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);
  // modal
  const notice = $(".notice li:first-child");
  const modal = $(".modal-wrap");
  const modalClose = $(".modal-close button");
  $(notice).click(function () {
    $(modal).addClass("active");
  });
  $(modalClose).click(function () {
    $(modal).removeClass("active");
  });
  // tab
  $(".notice-gallery > li > a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
  });
});
