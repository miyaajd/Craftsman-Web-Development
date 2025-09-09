$(function () {
  const slideList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);
  // tab
  const tabBtn = $(".tabBtn a");
  const tab = $(".no-ga ul");
  tabBtn.click(function (e) {
    e.preventDefault();
    tabBtn.removeClass("active");
    $(this).addClass("active");
    tab.removeClass("active");
    tab.eq($(this).index()).addClass("active");
  });
  // modal
  const notice = $("#first")
  notice.click(function(){
    $(".modal").fadeIn(300)
  })
  $("#close").click(function(){
    $(".modal").fadeOut(300)
  })
});
