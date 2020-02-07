;$(function () {
    var popup_open = false;
    clickAction($('.btn'), function () {
        $('.popup').addClass('active');
        popup_open = true;
    });
    clickAction($('.btn-close'), function () {
        $('.popup').removeClass('active');
        popup_open = false;
    });
    window.storyCLMNavigation.onSwipeNext = function (direction) {
        if (popup_open) {
            $('.popup').removeClass('active');
            popup_open = false;
        } else {
            window.location = direction;
        }
    };
});

