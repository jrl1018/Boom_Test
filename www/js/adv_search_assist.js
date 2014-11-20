$(document).ready(function() {

	$('.toggler').next('.select-row').hide();

	$('.toggler').click(function() {
    	var el = $(this).next('.select-row');
    	check = (el.is(':visible')) ? el.slideUp() : ($('.select-row').slideUp()) (el.slideDown());
	});

	$('.selection-name').click(function() {
		$(this).toggleClass('btn-default');
		$(this).toggleClass('btn-success');
	});


});