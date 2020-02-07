;$(function () {

	clickAction($('.layer_17'), function () {
		$('#slide_OT_EU_PB_a_18_layer_17a').toggle();
		$('#meter-icon-low').fadeToggle( "fast", "linear" );
		$('#meter-icon-nearLow, #meter-icon-inRange, #meter-icon-nearHigh, #meter-icon-high').hide();
		$('#slide_OT_EU_PB_a_18_layer_18a, #slide_OT_EU_PB_a_18_layer_19a, #slide_OT_EU_PB_a_18_layer_20a, #slide_OT_EU_PB_a_18_layer_21a, #slide_OT_EU_PB_a_18_layer_22a, #slide_OT_EU_PB_a_18_layer_23a').hide();
	 });

	clickAction($('.layer_18'), function () {
		$('#slide_OT_EU_PB_a_18_layer_18a').toggle();
		$('#meter-icon-nearLow').fadeToggle( "fast", "linear" );
		$('#meter-icon-low, #meter-icon-inRange, #meter-icon-nearHigh, #meter-icon-high').hide();
		$('#slide_OT_EU_PB_a_18_layer_17a, #slide_OT_EU_PB_a_18_layer_19a, #slide_OT_EU_PB_a_18_layer_20a, #slide_OT_EU_PB_a_18_layer_21a, #slide_OT_EU_PB_a_18_layer_22a, #slide_OT_EU_PB_a_18_layer_23a').hide();
	 });

	clickAction($('.inRange'), function () {
		$('#slide_OT_EU_PB_a_18_layer_19a, #slide_OT_EU_PB_a_18_layer_20a, #slide_OT_EU_PB_a_18_layer_21a').toggle();
		$('#meter-icon-inRange').fadeToggle( "fast", "linear" );
		$('#meter-icon-low, #meter-icon-nearLow, #meter-icon-nearHigh, #meter-icon-high').hide();
		$('#slide_OT_EU_PB_a_18_layer_17a, #slide_OT_EU_PB_a_18_layer_18a, #slide_OT_EU_PB_a_18_layer_22a, #slide_OT_EU_PB_a_18_layer_23a').hide();
	 });

	clickAction($('.layer_22'), function () {
		$('#slide_OT_EU_PB_a_18_layer_22a').toggle();
		$('#meter-icon-nearHigh').fadeToggle( "fast", "linear" );
		$('#meter-icon-low, #meter-icon-nearLow, #meter-icon-inRange, #meter-icon-high').hide();
		$('#slide_OT_EU_PB_a_18_layer_17a, #slide_OT_EU_PB_a_18_layer_18a, #slide_OT_EU_PB_a_18_layer_19a, #slide_OT_EU_PB_a_18_layer_20a, #slide_OT_EU_PB_a_18_layer_21a, #slide_OT_EU_PB_a_18_layer_23a').hide();
	 });

	clickAction($('.layer_23'), function () {
		$('#slide_OT_EU_PB_a_18_layer_23a').toggle();
		$('#meter-icon-high').fadeToggle( "fast", "linear" );
		$('#meter-icon-low, #meter-icon-nearLow, #meter-icon-inRange, #meter-icon-nearHigh').hide();
		$('#slide_OT_EU_PB_a_18_layer_17a, #slide_OT_EU_PB_a_18_layer_18a, #slide_OT_EU_PB_a_18_layer_19a, #slide_OT_EU_PB_a_18_layer_20a, #slide_OT_EU_PB_a_18_layer_21a, #slide_OT_EU_PB_a_18_layer_22a').hide();
	 });

});
