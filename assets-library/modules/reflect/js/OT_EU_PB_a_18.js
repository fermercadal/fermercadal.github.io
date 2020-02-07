;$(function () {
    localStorage.setItem('slide_19_state', '0');
    setTimeout(function () {
        $('.onetouch').addClass('active');
        $('.logo-color-w').addClass('active');
        $('.onetouch-item').addClass('fadeInUp');
        $('.onetouch-min').addClass('fadeIn');
        setTimeout(function () {
            $('.btn-wrapper').addClass('fadeInUp');
            $('.btn').addClass('tap');
        },100);
    },25);

    clickAction($('.btn'), function () {
        $('.text').removeClass('active');
        $(this.tapObject).parent().find('.text').addClass('active');
        if($(this.tapObject).parents('.btn-wrap').hasClass('b1')){
            $('.btn-wrap.b2').addClass('active');
            $('#slide_OT_EU_PB_a_18_layer_62').removeClass('active');
            console.log("one");
        } else {
            $('.btn-wrap.b2').removeClass('active');
            $('#slide_OT_EU_PB_a_18_layer_62').toggleClass('active');
            console.log("two");
        }
    });
});
