$(document).ready(function () {
	// $(".slider").slick({
	// 	autoplay: true,
	// 	slidesToShow: 7,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	infinite: true,
	// 	cssEase: "linear",

	// 	rtl: false,
	// 	prevArrow:
	// 		"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	// 	nextArrow:
	// 		"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
	// 	pauseOnFocus: false,
	// 	pauseOnHover: false,
	// 	autoplaySpeed: 2000,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 5,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 4,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 540,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 321,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// });
	$('#owl-two').owlCarousel({
        autoplay: true,
        autoPlaySpeed: 5000,
        autoPlayTimeout: 5000,
        autoplayHoverPause: true,
    loop:true,
    margin:20,
    nav:false,
	responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
	if ($(window).scrollTop() > 25) {
		$("#navbar").addClass("navbar-bg");
	}

	$(window).scroll(function () {
		if ($(window).scrollTop() > 25) {
			$("#navbar").addClass("navbar-bg");
		} else {
			$("#navbar").removeClass("navbar-bg");
		}
	});
});
