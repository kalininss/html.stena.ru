$(function() {

	// tabs on page 7
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn(0)
	}).eq(0).addClass("active");

	// wow js activate for animation
	var wow = new WOW(
	{
		boxClass:     'wow',      
		animateClass: 'animated', 
		offset:       50,         
		mobile:       false,       
		live:         true
	}
	);
	wow.init();

	// magnific popup. href must start from #popup--{id}
	$("a[href^='#popup--']").magnificPopup({
		type: 'inline'
	});

	// front slider
	$(".owl-header-front").owlCarousel({
		items: 1,
		nav: true,
		navText: ['<svg><use xlink:href="#43_Slider_Arrow"></use></svg>',
		'<svg><use xlink:href="#43_Slider_Arrow"></use></svg>'],
		lazyLoad: true
	});
	// slider effects from product page 07
	$('.js-owl-effects').owlCarousel({
		items: 1,
		nav: true,
		margin: 65,
		loop: true,
		dots: false,
		navText: ['<img src="img/svg-pages/slider-arrow.svg">',
		'<img src="img/svg-pages/slider-arrow.svg">'],
		responsive: {
			480 : {
				items: 2
			},
			768 : {
				items: 3
			},
			1024 : {
				items: 4
			}
		}
	});
	// slider effects from product page 07
	$('.js-owl-upsale').owlCarousel({
		items: 1,
		nav: true,
		margin: 50,
		loop: true,
		dots: false,
		navText: ['<img src="img/svg-pages/slider-arrow.svg">',
		'<img src="img/svg-pages/slider-arrow.svg">'],
		responsive: {
			480 : {
				items: 2
			},
			768 : {
				items: 4
			},
			1024 : {
				items: 5
			}
		}
	});

	// smooth scroll to #top
	$("a[href^='#top']").click(function () {
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 500);
		return false;
	});

	// Search button at the .topline
	$(".open-collapse-search").click(function(){
		$(this).next().addClass("opened");
		$("#to-focus").focus();
	});
	$(".collapsed-search__submit-btn").click(function(){
		if ( $(this).prev().val() == '' ) {
			$(this).parent().removeClass("opened");
			return false;
		}
	});

	// Open scroll-topline menu
	$(".js-open-scroll-menu").click(function(){
		$(".scroll-menu").toggleClass("opened");
	});
	$(".bg-dark").click(function(){
		$(".scroll-menu").removeClass("opened");
	});
	$(window).scroll(function() {
		if ( $("body").scrollTop() > 540 ) {
			$(".topline-scroll").addClass("opened");
			$("header").addClass("no-transform");
		}
		else {
			$(".topline-scroll").removeClass("opened");
			$(".scroll-menu").removeClass("opened");
			$("header").removeClass("no-transform");
		}
	});

	// Open search form in scroll topline
	$(".js-open-scroll-search").click(function(){
		$(".scroll-search").toggleClass("opened");
		$(this).find(".icon-plus").toggleClass("icon-plus__animate-minus");
		$("#to-focus2").focus();
		return false;
	});
	
	// parallax
	function activateParallax () {
		var st = $(window).scrollTop() / 20;
		$(".js-parallax").css({
			"transform" : "translate3d(0px, " + st  + "%, .01px)",
			"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
		});
	} activateParallax();
	$(window).bind('resize', activateParallax);
	$(window).bind('scroll', activateParallax);
	$(window).bind("orientationchange", activateParallax);
	
	$.scrollSpeed(100, 800); // smooth scroll

	// placeholder mask for input phone
	$(".js-phone-placeholder").mask("+7 (999) 999-99-99");

});



