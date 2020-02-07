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

    clickAction($('.toggle-BSM-Section'), function () {
        window.location = 'OT_EU_PB_a_17.html';
    });

    clickAction($('.toggle-CS-Section'), function () {
        window.location = 'OT_EU_PB_a_18b.html';
    });

    clickAction($('.toggle-OTR-Section'), function () {
        window.location = 'OT_EU_PB_a_25.html';
    });
});
