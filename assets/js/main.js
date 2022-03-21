(function ($) {
	// $('.questions-1').on('click', function () {
	// 	if ($(this).parents('.text-questions').hasClass('active')) {
	// 		$(this).parents('.text-questions').removeClass('active');
	// 	} else {
	// 		$('.questions-1').parents('.text-questions').removeClass('active');
	// 		$(this).parents('.text-questions').addClass('active');
	// 	}
	// });

	$('.text').on('click', function() {
		$(this).toggleClass('active');
		$('.text-questions').toggleClass('active');
	});

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