$(function () {
    'use strict';
    $('.toggle-sidebar').on('click', function () {
        $('.content-area , .sidebar').toggleClass('no-sidebar');
    });
    // Toggle Submenu
    $('.toggle-submenu').on('click', function(){
        $(this).find('.fa-angle-right').toggleClass('down');
        $(this)
            .next('.child-links')
            .slideToggle();
    });
    // Open / Close Fullscreen
    $('.toggle-fullscreen').on('click', function () {
        $(this).toggleClass('full-screen');
        if ($(this).hasClass('full-screen')) { // Page Is FullScrenn
            openFullscreen();
        } else { // Page Is Not FullScreen
            closeFullscreen();
        }
    });
});

var elem = document.documentElement;

function openFullscreen() {
if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
}
}

function closeFullscreen() {
if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
}
}