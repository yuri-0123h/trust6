$(function () {
  $(".toggle-btn").on("click", function () {
    $(".header-sp").toggleClass("open");
  });
  // $(".arrow-sp").on("click", function () {
  //   $(".header-sp-menu").toggleClass("open-menu");
  // });
  $(".arrow-sp").on("click", function () {
    $(".accordion-category-box").toggleClass("down");
  });

2
3
$('.accordion-category').click(function(){
    $(this).next().slideToggle(300);
});


});
