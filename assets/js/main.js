$(function () {

	$('.slider-card').slick({
		// arrows: true,
		infinite: two,
		slidesToShow: 3,
		slidesToScroll: 1,
		appendArrows: $('.slider-navigation'),
		prevArrow: '<span class="prev"></span>',
		nextArrow: '<span class="next"></span>'
	});

});