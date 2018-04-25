$(function(){

var hf = function(){
	var h_header = $('header').height();
	var h_footer = $('footer').height();

}

$(window).bind('load resize', hf);

	$('.home-slider').slick({
		arrows:true,
		dots:true,
		prevArrow: '<button type="button" class="slick-prev"><i class="ic ic--prev-arrow" aria-hidden="true"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="ic ic--next-arrow" aria-hidden="true"></i></button>',
	})
	$('.testimonial-slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight: true,
	})
	$('.menu-toggle').click(function(){
		$('.menu').slideToggle(400)
	})
});







