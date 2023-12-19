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

$(function(){
  var state = false;
  var scrollpos;
 
  $('.toggle-btn').on('click', function(){
    if(state == false) {
      scrollpos = $(window).scrollTop();
      $('body').addClass('fixed').css({'top': -scrollpos});
      $('.header-sp').addClass('open');
      state = true;
    } else {
      $('body').removeClass('fixed').css({'top': 0});
      window.scrollTo( 0 , scrollpos );
      $('.header-sp').removeClass('open');
      state = false;
    }
  });
 
});
});
