$(function() {


	// Hello, my skype: adidas-kss


	// 5a
	$('.js-open-order').click(function(){
		$(this).closest('.order_panel--row').next().slideToggle(300);
	});

	// 14 page header
	$('.page-parallax_interior').addClass('animated');


	// page 11 where to buy
	$('.not-found--close').click(function(){  $(this).parent().slideUp(300);  });


	// page #16 & #8 catalogue
	$('.js-reverse').click(function(){  $(this).find('.ui_order').toggleClass('reverse');  });


	// page #12 plus button
	$('.js-open-hidden-info').click(function(){
		var temp = $(this);
		if (!temp.hasClass('started')) {
			$(this).toggleClass('clicked').addClass('started').closest('.section_service').find('.hidden_info').slideToggle(500, function(){
				temp.removeClass('started');
			});
		}
	});


	// page #11c plus button
	$('.js-open-place').click(function(){
		var temp = $(this);
		if (!temp.hasClass('started')) {
			$(this).toggleClass('clicked').addClass('started').closest('.place_row').find('.col-hidden-place').slideToggle(500, function(){
				temp.removeClass('started');
			});
		}
	});


	// page #6, rotate panels
	$('.js-rotate').click(function(){$(this).closest('.rotate').toggleClass('rotated');});
	$('.rotate-item').on({'mouseenter':function(){  $(this).find('.rotate').fadeIn(0);  }});
	$('.rotate').on({'mouseleave':function(){  $(this).fadeOut(0).removeClass('rotated');  }});


	// функции находятся на самих страницах для удобства, здесь они пытаются вызваться. Чтобы не вылетало ошибок, мы их ловим и пропускаем
	try {loadJS();} catch (err) {} // фильтр по цене
	try	{startRange();} catch (err) {} // функция находится в файле 08_vybor_pokrytia.html


	// tabs on page 7
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn(0)
	}).eq(0).addClass("active");


	// magnific popup. href must start from #popup--{id}
	$("*[href^='#popup--']").magnificPopup({
		type: 'inline'
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


  // безобидный плюсик
	$('.b-plus').click(function(){  $(this).toggleClass('active');  return false; 	});
	




	    ////////////////////////////////////  
	 	 //                                //
	  // 	     АКТИВАЦИЯ СЛАЙДЕРОВ      //     
	 //                                //
	////////////////////////////////////	


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
		nav: true,
		margin: 0,
		dots: false,
		autoWidth: true,
		slideBy: 'page'
	});





	    ////////////////////////////////////  
	 	 //                                //
	  // 	ВИЗУАЛЬНЫЕ ЭФФЕКТЫ И ПЛАГИНЫ  //     // ПАРАЛЛАКС, ПЛАВНЫЙ СКРОЛЛ И т.д.
	 //                                //
	////////////////////////////////////	


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
	$(".js-phone-placeholder").mask("+7 (999) 999-99-99"); // placeholder mask for input phone


	// плагин отслеживает, когда пользователь доскроллит до нашего элемента и тогда запустит анимацию
	var wow = new WOW(
	{
		boxClass:     'wow',      
		animateClass: 'animated', 
		offset:       50,   // отступ для анимации     
		mobile:       false,    // на мобилках отключаем   
		live:         true
	}
	);
	wow.init(); // инициализация


	// smooth scroll to #top
	$("a[href^='#top']").click(function(){
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 500);
		return false;
	});



	    //////////////////  
	 	 //              //
	  // 	VISUALISER  //     // МНОГО КОДА ТОЛЬКО ДЛЯ ОДНОЙ СТРАНИЦЫ
	 //              //
	//////////////////	


	// кнопки День/Ночь
	$('.visualiser--button').click(function(){
		$('.visualiser--button').removeClass('visualiser--button-hidden');
		$(this).addClass('visualiser--button-hidden');
	});
	// безобидная и неважная функция выделения элементов border-ом
	$('.owl-visualiser--thumbnail').click(function(){
		$('.owl-visualiser--thumbnail').removeClass('clicked');
		$(this).addClass('clicked');
	});
	// безобидная и неважная функция выделения элементов border-ом
	$('.scroll--item').click(function(){
		$(this).parent().find('.scroll--item').removeClass('clicked');
		$(this).toggleClass('clicked');
		return false;
	});
	// открытие меню
	$('.visualiser--menu_button').click(function(){
		$(this).toggleClass('active');
		$('.scroll').hide(); // скрываем всё
		$('.visualiser--one_function').removeClass('opened'); // скрываем всё
		$('.visualiser--functions').toggleClass('opened'); // выезд панели с функциями снизу
	});


	// универсальная функция открытия панелей по нажатию на пункты меню
	$('.visualiser--one_function').click(function(){
		var checkForOpened = $(this).hasClass('opened'); // проверка, если кликнули по открытой вкладке
		$('.scroll').hide();
		$('.visualiser--one_function').removeClass('opened'); // скрываем всё
		if ( !checkForOpened ) { // если вкладка не было до этого открыта, то показываем её
			var scrollTarget = $(this).attr('data-target');
			$(scrollTarget).show();
			$(this).addClass('opened');
		} 
	});
	// и кнопка закрытия к ним
	$('.scroll-exit').click(function(){
		$('.scroll').hide();
		$('.visualiser--one_function').removeClass('opened');
	});
	// кнопка "добавить в закладки" - показывает уведомление и сразу скрывается
	$('.add_to_bookmark').click(function(){
		$('.add_to_bookmark__popup').show(300, function(){
			setTimeout(function(){
				$('.add_to_bookmark__popup').hide(300);
			}, 1000);
		});
	});

	// костыль, чтобы показывать всплывающие плашки при наведении вне области слайдера
	$('.owl-visualiser--thumbnail img').mouseover(function(){
		var text = $(this).next().text();
		var position = $(this).parent().offset();
		var positionParent = $('.visualiser--slider').offset();
		$('.owl-visualiser--plashka').text(text).css('top', position.top - positionParent.top).css('left', position.left - positionParent.left).show();
	}); // скрываем плашку
	$('.owl-visualiser--thumbnail img').mouseout(function(){ 
		$('.owl-visualiser--plashka').hide();
	});

});