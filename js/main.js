$(function () {
  $(".toggle-btn").on("click", function () {
    $(".header-sp").toggleClass("open");
  });


2
3
$('.accordion-category').click(function(){
    $(this).next().slideToggle(300);
    $(this).toggleClass("open", 300);
});
$('.category-item').click(function(){
  $(this).next('.dropdown-list2').slideToggle(300);
  $(this).toggleClass("open", 300);
});


});
