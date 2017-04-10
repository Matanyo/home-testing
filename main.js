$(document).ready(function(){
  console.log($('.your-class'));

  $('.your-class').slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode : true,
    centerPadding: true,
    slidesToScroll: 1
  });

// $('.your-class').click(function(){
//   var rot = 10;
//   console.log("clicked");
//   $(this).css("transform", "scale(1.8)");
// });

});
