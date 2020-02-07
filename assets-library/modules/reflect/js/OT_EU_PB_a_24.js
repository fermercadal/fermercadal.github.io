;$(function () {
    var counter = 0;
    var swipeCounter = 0;
    var $tapObj = '';
    clickAction($('.onetouch.ot.tap'), function () {
        $('.screen').addClass('active');
        $('.competitor-btn').addClass('tap a10');
    });
    clickAction($('.competitor-btn'), function () {
        swipeCounter = 1;
        counter++;
        $tapObj = $(this.tapObject);
        $tapObj.removeClass('tap');
        $('.competitor-wrap').toggleClass('active');
        // $('.screen').addClass('active');
        if(counter == 1){
            setTimeout(function () {
                $tapObj.addClass('tap');
            },500);
        }
        if(counter == 2){
            $('.onetouch').addClass('left');
            $('.signal, .signal-dot').addClass('active');
            $('.phone').addClass('active');
            $('.screen-tap').addClass('tap c3');
            $('.ot-info').addClass('fadeInUp');
            $('.caption').addClass('active');
        }
    });
    clickAction($('.phone-screen'), function () {
        $(this.tapObject).addClass('fadeIn');
        $('.text').addClass('fadeInUp');
    });
    /*
    window.storyCLMNavigation.onSwipeNext = function(direction) {
        if(counter > 1){
            window.location = 'OT_EU_PB_a_25.html';
        }
    };
    window.storyCLMNavigation.onSwipePrev = function(direction) {
        if (direction) {
            if (swipeCounter > 0) {
                counter--;
                $tapObj.addClass('tap');
                $('.competitor-wrap').removeClass('active');
                $('.screen').removeClass('active');
                swipeCounter = 0;
            } else {
                revertHistory(direction);
            }
        } else {
            return false;
        }
    };*/
});
