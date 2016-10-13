$(function() {

	// 14 page header
	$('.page-parallax_interior').addClass('animated');


	// page 11 where to buy
	$('.not-found--close').click(function(){
		$(this).parent().slideUp(300);
	});

	// $('.gallery').nested({
	// 	selector: '.gallery--item',
	// 	minWidth: 300,
	// 	minColumn: 4,
	// 	gutter: 10,
	//   resizeToFit: true,
	//   resizeToFitOptions: { 
	//     resizeAny: true
	//   }
	// });
	// page gallery for equale height
	// $(".gallery").mason({
	// 	itemSelector: '.gallery--item',
	// 	ratio: 1.32,
	// 	sizes: [
	// 	[1, 1]
	// 	],
	// 	promoted: [
	// 	['gallery--item-high', 1, 2],
	// 	['gallery--item-quadro', 1, 1],
	// 	['gallery--item-long', 2, 1]
	// 	],
	// 	columns: [
	// 	[0,870,2],
	// 	[870,1300,3],
	// 	[1300,1680,4]
	// 	],
	// 	filler: {},
	// 	layout: 'fluid',
	// 	gutter: 5
	// });
	// var wall = new Freewall('.gallery');
	// wall.reset({
	// 	selector: '.gallery--item',
	// 	cellW: 100,
	// 	cellH: 'auto',
	// 	// fixSize: 0,
	// 	gutterX: 10,
	// 	gutterY: 10,
	// 	onResize: function (){
	// 		wall.fitZone();
	// 	}
	// })
	// wall.fitZone();
	// $(window).trigger("resize");

	// page #16 & #8 catalogue
	$('.js-reverse').click(function(){
		$(this).find('.ui_order').toggleClass('reverse');
	});

	// page #12 plus button
	$('.mega_plus').click(function(){
		var temp = $(this);
		if (!temp.hasClass('started')) {
			$(this).toggleClass('clicked').addClass('started').closest('.section_service').find('.hidden_info').slideToggle(500, function(){
				temp.removeClass('started');
			});
		}
	});

	// page #6, rotate panels
	$('.js-rotate').click(function(){
		$(this).closest('.rotate').toggleClass('rotated');
	});
	$('.rotate-item').on( {
		'mouseenter':function() { $(this).find('.rotate').fadeIn(300); }
	});
	$('.rotate').on( {
		'mouseleave':function() { $(this).fadeOut(300).removeClass('rotated');}
	});

	// фильтр по цене
	try {
		loadJS();
		startRange();
	} catch (err) {
		// функция находится в файле 08_vybor_pokrytia.html
	}

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
	$("*[href^='#popup--']").magnificPopup({
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
			480 : {items: 2},
			768 : {items: 3},
			1024 : {items: 4}
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
			480 : {items: 2},
			768 : {items: 4},
			1024 : {items: 5}
		}
	});
	$(".js-owl-double").owlCarousel({
		items: 4,
		nav: true,
		margin: 10,
		loop: true,
		dots: false,
		navText: ['<img src="img/svg-pages/slider-arrow.svg">',
		'<img src="img/svg-pages/slider-arrow.svg">'],
	});
	$(".js-owl-double-small").owlCarousel({
		items: 2,
		nav: true,
		margin: 10,
		loop: true,
		dots: false,
		navText: ['<img src="img/svg-pages/slider-arrow.svg">',
		'<img src="img/svg-pages/slider-arrow.svg">'],
	});
	$('.js-owl-half').owlCarousel({
		items: 5,
		nav: true,
		margin: 30,
		stagePadding: 25,
		loop: true,
		dots: false,
		navText: ['<img src="img/svg-pages/slider-arrow.svg">',
		'<img src="img/svg-pages/slider-arrow.svg">'],
		responsive: {
			320 : {items: 2},
			480 : {items: 3},
			768 : {items: 5}
		}
	});
	$('.owl-visualiser').owlCarousel({
		// items: 10,
		nav: true,
		margin: 2,
		loog: false,
		dots: false,
		autoWidth: true
	});

	// smooth scroll to #top
	$("a[href^='#top']").click(function(){
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

	// open next
	$(".js-open-next").click(function(){
		$(this).next().toggleClass('opened');
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
			// $("header").addClass("no-transform");
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

	// visualiser
	$('.owl-visualiser--thumbnail').click(function(){
		$('.owl-visualiser--thumbnail').removeClass('clicked');
		$(this).addClass('clicked');
	})
	$('.scroll-exit').click(function(){
		if ( $(this).parent().hasClass('scroll-effects') ) {
			$('.scroll-effects').toggle();
			$('.visualiser--one_function-other').toggleClass('opened');
		}
		else if ( $(this).parent().hasClass('scroll-interior') ) {
			$('.scroll-interior').toggle();
			$('.visualiser--one_function-other_interior').toggleClass('opened');
		}
		else if ( $(this).parent().hasClass('scroll-bookmark') ) {
			$('.scroll-bookmark').toggle();
			$('.visualiser--one_function-favourite').toggleClass('opened');
		}
		$(this).parent().hide();
	});
	$('.scroll--item').click(function(){
		$(this).parent().find('.scroll--item').removeClass('clicked');
		$(this).toggleClass('clicked');
		return false;
	});
	$('.visualiser--one_function-other').click(function(){
		$('.scroll-effects').toggle();
		$(this).toggleClass('opened');
	});
	$('.visualiser--one_function-other_interior').click(function(){
		$('.scroll-interior').toggle();
		$(this).toggleClass('opened');
	});
	$('.visualiser--one_function-favourite').click(function(){
		$('.scroll-bookmark').toggle();
		$(this).toggleClass('opened');
	});
	$('.visualiser--menu_button').click(function(){
		$(this).toggleClass('active');
		$('.scroll').hide();
		$('.visualiser--one_function').removeClass('opened');
		$('.visualiser--functions').toggleClass('opened');
	});
	$('.add_to_bookmark').click(function(){
		$('.add_to_bookmark__popup').show(300, function(){
			setTimeout(function(){
				$('.add_to_bookmark__popup').hide(300);
			}, 1000);
		});
	});

});



