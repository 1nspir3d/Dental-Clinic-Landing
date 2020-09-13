"use strict";

$(document).ready(function () {
  $('.cert-slider').slick({
    infinite: true,
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $('.advantages-slider').slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 20000
  });
});