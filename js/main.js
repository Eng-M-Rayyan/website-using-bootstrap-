$(function() {
    'use strict';
    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.head-bar').innerHeight(),
        navH = $('.nav-bar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH))
});