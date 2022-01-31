$(document).ready(function() {

	$('.btn-cerrar button').on('click',function() {
		$($(this).attr("data-id")).fadeOut(1000);
	});

	$('.p-link a').on('click',function() {
		$($(this).attr("data-id")).fadeIn(1000);
	});
});