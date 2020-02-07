;$(function () {
clickAction($('.title, .pluses'),function () {
    var $self = $(this.tapObject),
        subtext = $self.attr('data-textUnder');

    switch(subtext) {
    	case "slide_OT_info_item_1":
            // toggle dispaly picture
            $('#slide_OT_EU_PB_a_26_layer_13.view2').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13.view3').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13').toggleClass('view1');

            //remove classes
    		$('#slide_OT_info_item_2').removeClass("info-active");
    		$('#slide_OT_info_item_3').removeClass("info-active");
    	break;

    	case "slide_OT_info_item_2":
    		// toggle dispaly picture
            $('#slide_OT_EU_PB_a_26_layer_13.view1').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13.view3').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13').toggleClass('view2');

            //remove classes
    		$('#slide_OT_info_item_1').removeClass("info-active");
    		$('#slide_OT_info_item_3').removeClass("info-active");
    	break;

    	case "slide_OT_info_item_3":
            // toggle dispaly picture
            $('#slide_OT_EU_PB_a_26_layer_13.view1').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13.view2').removeAttr('class');
            $('#slide_OT_EU_PB_a_26_layer_13').toggleClass('view3');

            //remove classes
    		$('#slide_OT_info_item_1').removeClass("info-active");
    		$('#slide_OT_info_item_2').removeClass("info-active");
    	break;
    }

    $('#' + subtext).toggleClass('info-active');


})

});
