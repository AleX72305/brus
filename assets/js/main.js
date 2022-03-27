
(function ($) {
	$('.questions-1').on('click', function () {
		if ($(this).parents('.text-questions').hasClass('active')) {
			$(this).parents('.text-questions').removeClass('active');
		} else {
			$('.questions-1').parents('.text-questions').removeClass('active');
			$(this).parents('.text-questions').addClass('active');
		}
	});

	$('.panel').on('click', function () {
		if ($(this).next('.panel-menu').hasClass('active')) {
			$(this).next('.panel-menu').removeClass('active');
		} else {
			$('.panel-menu').next('.panel-menu').removeClass('active');
			$(this).next('.panel-menu').addClass('active');
		}
	});


	$('.home-slider').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});


	$('.category-slider').slick({
		arrows: false,
		dots: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});

	

	
	// $('.menu-mobile').on('click', function() {
	// 	$(this).toggleClass('active');
	// 	$('.menu-pc').toggleClass('active');
	// });

	// $('.btn').on('click', function() {

	// 	$('.btn').removeClass('active');
	// 	$(this).addClass('active');

	// });

	// addClass() 			Добавить класс
	// removeClass()		Удалить класс
	// toggleClass()		Добавить/Удалить класс

	$('.open-menu').on('click', function () {
		$('.slide-mobile-menu').addClass('active');
	});

	$('.close').on('click', function () {
		$('.slide-mobile-menu').removeClass('active');
	});

})(jQuery);