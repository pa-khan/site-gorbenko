// $(document).ready(function($) {

	/* Phone mask */
	$('.input_phone').mask('+7 (999) 999-99-99');
	


	$('.parallax-layer_work div').parallax({
		mouseport: $(".header"),
		xparallax: '50px',
		yparallax: '50px',
	});

	var check = true;

	$('.header').parallaxBackground();

	$(window).on('scroll', function(event) {
		var positionDigits = $('.digits').offset().top - 400;
		if ($(window).scrollTop() >= positionDigits && check == true) {
			$('.digits__num').each(function(index, el) {
				$(this).text('0')
				var num = $(this).attr('data-num');
				$(this).animateNumber(
					{
						number: num,
						easing: 'easeInQuad'
					}, 4000
				);
			});
			check = false;
		}

	});

	


	var popupImage = $('#popup-slider .popup__image'),
			popupImages = $('#popup-slider .popup__images'),
			popupTitle = $('#popup-slider .popup__title');

	$('.portfolio__button').click(function(event) {

		var item = $(this).parents('.portfolio__item'),
				images1 = item.find('.portfolio__images img').clone(),
				images2 = item.find('.portfolio__images img').clone();
		
		popupImage.html('<div class="portfolio__image-wrap"></div>');
		popupImages.html('<div class="portfolio__images-wrap"></div>');

		popupImage.find('.portfolio__image-wrap').html(images1);
		popupImages.find('.portfolio__images-wrap').html(images2);

		var title = item.find('.portfolio__subtitle-hidden').clone();
		popupTitle.html(title);

		$('.popup .portfolio__image-wrap').slick({
			prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left-white"></i></button>',
			nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right-white"></i></button>',
			asNavFor: '.popup .portfolio__images-wrap'
		})
		$('.popup .portfolio__images-wrap').slick({
			slidesToShow: 5,
			arrows: false,
			focusOnSelect: true,
			asNavFor: '.popup .portfolio__image-wrap',

		})
		
		
	});
		

	$('.panel__nav a').click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});
// });