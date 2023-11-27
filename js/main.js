$(function () {
  $(".toggle-btn").on("click", function () {
    $(".header-sp").toggleClass("open");
  });
  // $(".arrow-sp").on("click", function () {
  //   $(".header-sp-menu").toggleClass("open-menu");
  // });
  $(".accordion-category").on("click", function () {
    $("this").next().slideToggle("300");
  });

});