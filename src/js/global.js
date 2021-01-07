!(function ($) {
	"use strict";

	// page preloader
	$(window).on('load', function() {
		let preloader = $('.js-preloader');
		if (preloader.length) {
			preloader.delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}
	});

	// init AOS library
	$(window).on('load', function () {
		AOS.init({
			duration: 1000,
			once: true
		});
	});

	// init elements that use counterUp library
	$('.js-counter-up').counterUp({
		delay: 10,
		time: 1000
	});

	// determine the offset
	let scrolltoOffset = $('.js-header').outerHeight() - 21;
	if (window.matchMedia("(max-width: 991px)").matches) {
		scrolltoOffset += 20;
	}

	// smooth scroll for the navigation menu and links with .js-scrollto classes
	$(document).on('click', '.js-navbar-link, .js-scrollto', function(e) {
		let hash = this.hash;
		let target = $(hash); // target element

		if (target.length) {
			e.preventDefault();
			let scrollto = target.offset().top - scrolltoOffset;

			if ($(this).attr('href') === '#header') {
				scrollto = 0;
			}

			// automatically close mobile menu after click on item
			if ($(this).hasClass('js-navbar-link') && window.matchMedia("(max-width: 991px)").matches) {
				$('.js-page').removeClass('c-page--has-overlay');
			}

			$('html, body').animate({
				scrollTop: scrollto
			}, 900, function() {
				if (history.pushState) {
					history.pushState(null, null, hash);
				} else {
					location.hash = hash;
				}
			});
		}
	});

	// Navigation active state on scroll
	let contentSections = $('section');
	let mainNav = $('.js-navbar');

	$(window).on('scroll', function () {
		let curPos = $(this).scrollTop() + 200;

		contentSections.each(function () {
			let top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (curPos >= top && curPos <= bottom) {
				if (curPos <= bottom) {
					mainNav.find('li').removeClass('c-navbar__item--active');
				}
				mainNav.find('.js-navbar-link[href="#' + $(this).attr('id') + '"]').parent('li').addClass('c-navbar__item--active');
			}
			if (curPos < 300) {
				$(".js-navbar ul:first li:first").addClass('c-navbar__item--active');
			}
		});
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
			page.toggleClass('c-page--has-overlay');
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

	// skills section
	$('.js-skills').waypoint(function() {
		$('.js-progress-bar').each(function() {
			$(this).animate({"width": $(this).data("value") + '%'}, 900);
	    });
	}, {
		offset: '70%'
	});
})(jQuery);