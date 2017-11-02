$(document).ready(function($) {

	/* Phone mask */
	$('.input_phone').mask('+7 (999) 999-99-99');
	

	var currentNumber = $('.digits__num');
	currentNumber.each(function(index, el) {
		$(this).text('0');
		var num = $(this).attr('data-num');


		$({numberValue: 1}).animate({numberValue: 35}, {
				duration: 8000,
				easing: 'linear',
				step: function() { 
						$(this).text(Math.ceil(num.numberValue)); 
				}
		});

	});

	

});