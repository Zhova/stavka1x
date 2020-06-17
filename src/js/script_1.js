$(document).ready(function () {
  $(".news-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".burger").click(() => {
    $(".nav-menu").fadeToggle(300);
    $(".login-lang").fadeToggle(300);
    $(".line-first").toggleClass("first-transform");
    $(".line-second").toggleClass("second-transform");
    $(".line-third").toggleClass("third-transform");
  });
});
