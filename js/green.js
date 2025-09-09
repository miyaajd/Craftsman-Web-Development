$(function () {
  $("#first").click(function () {
    $(".txt-modal").show();
  });
  $("#gallery-first").click(function () {
    $(".gallery-modal").show();
  });
  $("#close").click(function () {
    $(".modal").hide();
  });
  $(".gallery-close").click(function(){
    $(".modal").hide()
  })
  const slideList = $(".img-slide");
  const slideWidth = $(".img-slide li ").width();
  const moveSlide = () => {
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first-child"));
      $(this).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);
// 
$(".nav > li ").hover(function(){
    $(".depth2Bg, .depth2").stop().slideDown(300)}
,function(){
    $(".depth2Bg, .depth2").stop().slideUp(300)})
});
