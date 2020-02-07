;$(function () {

    setTimeout(function () {
        $('.normal').removeClass('light fadeOut a30 a20').addClass('fadeIn');
    },4500);
    window.storyCLMNavigation.onSwipeNext = function() {
            window.location = 'slide8.html';
    };

});
