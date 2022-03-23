
(function ($) {
	$('.questions-1').on('click', function () {
		if ($(this).parents('.text-questions').hasClass('active')) {
			$(this).parents('.text-questions').removeClass('active');
		} else {
			$('.questions-1').parents('.text-questions').removeClass('active');
			$(this).parents('.text-questions').addClass('active');
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
			  breakpoint: 1024,
			  settings: {
				 slidesToShow: 3,
				 slidesToScroll: 3,
				 infinite: true,
				 dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				 slidesToShow: 2,
				 slidesToScroll: 2
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


	// $('.text').on('click', function() {
	// 	$(this).toggleClass('active');
	// 	$('.text-questions').toggleClass('active');
	// });

	// $('.btn').on('click', function() {

	// 	$('.btn').removeClass('active');
	// 	$(this).addClass('active');

	// });

	// addClass() 			Добавить класс
	// removeClass()		Удалить класс
	// toggleClass()		Добавить/Удалить класс


	// $('.close').on('click', function() {
	// $('.popup').removeClass('active');
	// });

})(jQuery);