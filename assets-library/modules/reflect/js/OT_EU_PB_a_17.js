;$(function () {
    clickAction($('.btn'), function () {
        var btn_id = $(this.tapObject).index();
        $('.view, .icon, .arrow').removeClass('active');
        $('.view').eq(btn_id).addClass('active');
        $('.icon').eq(btn_id).addClass('active');
        $('.arrow').eq(btn_id).addClass('active');
        $('.icon-off, .arrow-off').addClass('active');
        $('.icon-off').eq(btn_id).removeClass('active');
        $('.arrow-off').eq(btn_id).removeClass('active');
        $('.screen-off').removeClass('active');
    });
});
