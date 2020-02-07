;$(function () {
    var slide_state = localStorage.getItem('slide_19_state');
    if(slide_state == '0'){
        localStorage.setItem('slide_19_state','1');
    } else {
        $('.glow, .tip').removeClass('light');
        $('.screen').removeClass('fadeOut').not(':eq(1)').hide();
        $('.normal').addClass('active');
    }
    setTimeout(function () {
        $('.normal').removeClass('light fadeOut a30 a20').addClass('fadeIn');
    },4500);
    window.storyCLMNavigation.onSwipeNext = function() {
            window.location = 'OT_EU_PB_a_25.html';
    };
});
