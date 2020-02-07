;$(function () {
    var btn_id = '';
    clickAction($('.btn'), function () {
        var $selfId = $(this.tapObject).index('.btn');
        if (btn_id == $selfId) {
            $('.text').eq(btn_id).toggleClass('active');
        } else {
            btn_id = $(this.tapObject).index('.btn');
            $('.text').removeClass('active');
            $('.text').eq(btn_id).addClass('active');
        }
    });
});
