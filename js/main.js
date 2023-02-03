(function($){
	'use strict';

// Menu
$('span.veer-menu-bar').on('click', function(){
	$('.veer-nav').slideDown();
	$('span.veer-menu-close').show();
	$(this).hide();
});

$('span.veer-menu-close').on('click', function(){
	$('.veer-nav').slideUp();
	$('span.veer-menu-bar').show();
	$(this).hide();
});

$(window).resize(function(){

	var screenSize = $(window).width();
	if (screenSize > 991) {
		$('.veer-nav').removeAttr('style');
	}
});









}) (jQuery);