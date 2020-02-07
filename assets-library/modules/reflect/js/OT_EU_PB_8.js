;$(function () {
	clickAction($('.btn'), function () {
		var btn_id = $(this.tapObject).index('.btn');
		$('.text').eq(btn_id).addClass('fadeIn');
    });
});
