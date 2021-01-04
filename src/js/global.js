!(function ($) {
	"use strict";

	$(window).on('load', function () {
		AOS.init({
			duration: 1000,
			once: true
		});
	});

	// page preloader
	$(window).on('load', function() {
		let preloader = $('.js-preloader');
		if (preloader.length) {
			preloader.delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// mobile menu handler
	$('.js-nav-toggler').on('click', function() {
		$('.js-page').toggleClass('c-page--has-overlay');
	});

	// close mobile menu when click outside of it
	$(window).on('click', function(e) {
		let page = $('.js-page');
		let navbar = $('.js-navbar-collapse');
		let navbarToggler = $('.js-nav-toggler');

		if (page.hasClass('c-page--has-overlay') && !navbar.is(e.target) && navbar.has(e.target).length === 0 && !navbarToggler.is(e.target) && navbarToggler.has(e.target).length === 0) {
			$('.js-page').toggleClass('c-page--has-overlay');
		}
	});

	// run only on descktop screen sizes
	if ($(window).width() > 992) {
		// toggle "--is-scrolled" state class to header and topbar when page is scrolled
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.js-header').addClass('c-header--is-scrolled');
				$('.js-topbar').addClass('c-topbar--is-scrolled');
			} else {
				$('.js-header').removeClass('c-header--is-scrolled');
				$('.js-topbar').removeClass('c-topbar--is-scrolled');
			}
		});

		if ($(window).scrollTop() > 100) {
			$('.js-header').addClass('c-header--is-scrolled');
			$('.js-topbar').addClass('c-topbar--is-scrolled');
		}
	}
})(jQuery);