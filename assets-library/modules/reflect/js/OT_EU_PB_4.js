;$(function () {
    var counter = 0;
    window.storyCLMNavigation.onSwipeNext = function(direction) {

        if(counter == 1){
            window.location = direction;
        }
        $('.text-wrap').addClass('fadeOutLeftMin');
        $('.call').addClass('fadeInLeftMin');
        $('.call-wrap').addClass('pulse');
        $('.btn').addClass('tap c2');
        counter++;
    };
});
