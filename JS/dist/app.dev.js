"use strict";

$(function () {
  var header = $("#header");
  var aboutH = $("#about").innerHeight();
  var scrollOffSet = $(window).scrollTop();
  checkScroll(scrollOffSet);
  /* Fixed Header */

  $(window).on("scroll", function () {
    scrollOffSet = $(this).scrollTop();
    checkScroll(scrollOffSet);
  });

  function checkScroll(scrollOffSet) {
    if (scrollOffSet >= aboutH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  /* Smooth Scroll */


  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    var $this = $(this);
    var blockId = $this.data('scroll');
    var blockOffSet = $(blockId).offset().top;
    $("html, body").animate({
      scrollTop: blockOffSet
    }, 700);
  });
  /* Nav Pressed */

  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("pressed");
    $("#nav").toggleClass("toggled");
  });
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    $("#nav-toggle").removeClass("pressed");
    $("#nav").removeClass("toggled");
  });
});