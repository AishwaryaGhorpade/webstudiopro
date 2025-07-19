/***************************************************
==================== About Template ======================
****************************************************

    Theme Name: Ranko - SEO & Digital Marketing HTML5 Template
		Theme URI: https://themejunction.net/html/ranko/demo/
    Author: Theme-Junction
		Author URI: https://themeforest.net/user/theme-junction
    Support: https://support.themejunction.net/
    Description: Ranko - SEO & Digital Marketing HTML5 Template
    Version: 1.0

****************************************************/

/***************************************************
==================== JS INDEX ======================
****************************************************

1. Preloader
2. WOW Animation
3. Backtotop
4. Sticky header
5. Mobile Menu Js
6. Offcanvas
7. Hamburger Menu
8. GSAP Registratiobn
9. Progress bar
10. Nice select
11. Marquee slide
12. Slider
13. Odometer
14. Tab controller
15. Glightbox Gallery
16. Rating
17. Title Animation

****************************************************/

(function ($) {
	"use strict";
	/*====================== Preloader ======================*/
	$(window).on("load", function () {
		$(".preloader").fadeOut(300);
	});

	$(document).ready(function () {
		/*====================== WOW Animation ======================*/
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 80, // default
			callback: function (box) {
				// Ensure visibility when animation starts
				$(box).css("visibility", "visible");
				$(box).css("opacity", "1");
			},
		});
		wow.init();

		/*====================== Backtotop ======================*/
		function back_to_top() {
			if ($("#back_to_top").length) {
				var btn = $("#back_to_top");
				var btn_wrapper = $(".back-to-top-wrapper");

				$(window).on("scroll", function () {
					if ($(window).scrollTop() > 300) {
						btn_wrapper.addClass("back-to-top-btn-show");
					} else {
						btn_wrapper.removeClass("back-to-top-btn-show");
					}
				});

				btn.on("click", function (e) {
					e.preventDefault();
					$("html, body").animate({ scrollTop: 0 }, "300");
				});
			}
		}
		back_to_top();

		/*====================== Sticky header ======================*/
		let lastScrollTop = 0;
		const header = document.querySelector(".header-sticky");
		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop || scrollTop < 400) {
				// Scrolling Down
				header.classList.remove("sticky");
			} else {
				// Scrolling Up
				header.classList.add("sticky");
			}

			lastScrollTop = scrollTop;
		});

		/*====================== Mobile Menu Js ======================*/
		$(".menu_bar").on("click", function () {
			$(this).toggleClass("on");
		});

		/*====================== Offcanvas ======================*/
		$(".menu_bar.menu_offcanvas").on("click", function () {
			$(".tj-offcanvas-area").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});
		$("#mobileNavProvider").meanmenu({
			meanMenuContainer: ".mobile_menu",
			meanScreenWidth: "991",
			meanExpand: ['<i class="tji-arrow-down-filled"></i>'],
		});

		/*====================== Hamburger Menu ======================*/
		$(".mobile_menu_bar").on("click", function () {
			$(".hamburger-area").addClass("opened");
			$(".body-overlay").addClass("opened");
		});
		$(".hamburger_close_btn").on("click", function () {
			$(".hamburger-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
			$(".mobile_menu_bar").removeClass("on");
		});
		$(".body-overlay").on("click", function () {
			$(".hamburger-area").removeClass("opened");
			$(".body-overlay").removeClass("opened");
			$(".mobile_menu_bar").removeClass("on");
		});

		/*====================== GSAP Registratiobn ======================*/
		gsap.registerPlugin(ScrollTrigger, SplitText, TweenMax, ScrollToPlugin);
		gsap.config({
			nullTargetWarn: false,
		});

		/*====================== Progress bar ======================*/
		const progressBarController = () => {
			const progressContainers = document.querySelectorAll(".tj-progress");

			if (progressContainers?.length) {
				progressContainers.forEach(progressContainer => {
					const targetedProgressBar =
						progressContainer.querySelector(".tj-progress__bar");
					const completedPercent =
						parseInt(targetedProgressBar.getAttribute("data-perchant"), 10) ||
						0;

					gsap.to(targetedProgressBar, {
						width: `${completedPercent}%`, // Correct width
						ease: "power2.out",
						scrollTrigger: {
							trigger: progressContainer, // Use container for better scroll handling
							start: "top 90%",
							end: "top 30%",
						},
						onUpdate: function () {
							let progressValue = Math.round(this.progress() * 100); // Corrected scaling
							let displayPercent = Math.round(
								(completedPercent * progressValue) / 100
							); // Fixes low % issue

							const percentageText = progressContainer.querySelector(
								".tj-progress__perchant"
							);
							if (percentageText) {
								percentageText.textContent = displayPercent + "%";
							}
						},
					});
				});
			}
		};
		// Call the function
		progressBarController();

		/*====================== Nice select ======================*/
		if ($(".tj-nice-select").length) {
			$(".tj-nice-select").niceSelect();
		}

		/*====================== Marquee slider ======================*/
		//Brand Marquue Js
		if ($(".brand-marquee__slider").length > 0) {
			var marquee = new Swiper(".brand-marquee__slider", {
				slidesPerView: "auto",
				spaceBetween: 0,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 4000,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
				},
				breakpoints: {
					1200: {
						spaceBetween: 23,
					},
				},
			});
		}
		//Service Marquee slider Js
		if ($(".service-marquee__slider").length > 0) {
			var marquee = new Swiper(".service-marquee__slider", {
				slidesPerView: "auto",
				spaceBetween: 20,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 4000,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
				},
				breakpoints: {
					1200: {
						spaceBetween: 50,
					},
					992: {
						spaceBetween: 40,
					},
					768: {
						spaceBetween: 30,
					},
				},
			});
		}
		//Text Marquee slider Js
		if ($(".text-marquee-slider").length > 0) {
			var marquee = new Swiper(".text-marquee-slider", {
				slidesPerView: "auto",
				spaceBetween: 10,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 4000,
				allowTouchMove: false,
				autoplay: {
					delay: 0,
				},
				breakpoints: {
					1200: {
						spaceBetween: 20,
					},
				},
			});
		}

		/*====================== Slider ======================*/
		// Portfolio Slider Js
		if (document.querySelector(".portfolio__slider")) {
			var swiper = new Swiper(".portfolio__slider", {
				slidesPerView: 1.3,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				initialSlide: 2,
				speed: 1500,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},

				breakpoints: {
					1200: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
		// Portfolio 2 Slider Js
		if (document.querySelector(".portfolio__slider__2")) {
			var swiper = new Swiper(".portfolio__slider__2", {
				slidesPerView: 1.3,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				initialSlide: 2,
				speed: 1500,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},

				breakpoints: {
					576: {
						slidesPerView: 1.5,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 2.5,
					},
					1600: {
						slidesPerView: 4,
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
		// Portfolio 2 Slider Js
		if (document.querySelector(".portfolio__slider__3")) {
			var swiper = new Swiper(".portfolio__slider__3", {
				slidesPerView: 1.2,
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				speed: 1500,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},

				breakpoints: {
					992: {
						centeredSlides: false,
						slidesPerView: 2,
						spaceBetween: 30,
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
		// Testimonials Slider Js
		if (document.querySelector(".testimonials__slider")) {
			var swiper = new Swiper(".testimonials__slider", {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: true,
				initialSlide: 1,
				speed: 1500,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},

				breakpoints: {
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}
		// Testimonials Slider Js
		if (document.querySelector(".testimonials__slider__3")) {
			var swiperTumbs = new Swiper(".testimonials__slider__3__thumbs", {
				spaceBetween: 30,
				slidesPerView: 1,
				loop: true,
				freeMode: true,
				watchSlidesProgress: true,
				speed: 5000,
				effect: "fade",
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},
			});
			var swiperSlider3 = new Swiper(".testimonials__slider__3", {
				spaceBetween: 30,
				slidesPerView: 1,
				loop: true,
				speed: 1500,
				autoplay: {
					delay: 7000,
					disableOnInteraction: true,
				},

				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".testimonials-nav-next",
					prevEl: ".testimonials-nav-prev",
				},
			});

			swiperSlider3.controller.control = swiperTumbs;
			swiperTumbs.controller.control = swiperSlider3;
		}
		//  testimonial Slider  Js
		if ($(".hero__analytics__slider__main").length > 0) {
			var slider = new Swiper(".hero__analytics__slider__main", {
				direction: "vertical",
				slidesPerView: "auto",
				spaceBetween: 15,
				allowTouchMove: false,
				loop: true,
				speed: 1000,
				autoplay: {
					delay: 5000,
				},

				breakpoints: {
					992: {
						spaceBetween: 22,
					},
				},
			});
		}
		// team Slider  Js
		if ($(".team__slider").length > 0) {
			var slider = new Swiper(".team__slider", {
				slidesPerView: 2,
				spaceBetween: 15,
				loop: true,
				speed: 1500,
				autoplay: {
					delay: 5000,
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},

				breakpoints: {
					576: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 4,
					},
				},
			});
		}
		// Tab slider Slider Js
		if (document.querySelector(".strategy__tab__slider")) {
			var swiper = new Swiper(".strategy__tab__slider", {
				slidesPerView: 2,
				spaceBetween: 15,

				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					992: {
						slidesPerView: 4,
					},
					1200: {
						spaceBetween: 20,
						slidesPerView: 4,
					},
					1440: {
						slidesPerView: 5,
						spaceBetween: 20,
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}

		/*====================== Odometer ======================*/
		function controllOdometer(num) {
			if ($(".odometer").length > 0) {
				$(`.number--${num} .odometer`).each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
				// Delay to ensure the page is fully loaded
			}
		}
		if ($(".number--1 .odometer").length > 0) {
			$(".number--1 .odometer").appear(function () {
				controllOdometer(1);
			});
		}
		if ($(".number--3 .odometer").length > 0) {
			$(".number--3 .odometer").appear(function () {
				controllOdometer(3);
			});
		}
		if ($(".number--4 .odometer").length > 0) {
			$(".number--4 .odometer").appear(function () {
				controllOdometer(4);
			});
		}
		if ($(".number--5 .odometer").length > 0) {
			$(".number--5 .odometer").appear(function () {
				controllOdometer(5);
			});
		}
		if ($(".number--6 .odometer").length > 0) {
			$(".number--6 .odometer").appear(function () {
				controllOdometer(6);
			});
		}
		if ($(".number--7 .odometer").length > 0) {
			$(".number--7 .odometer").appear(function () {
				controllOdometer(7);
			});
		}

		/*====================== Tab controller ======================*/
		$(".tj-tab-switcher__controller").on("change", function () {
			if ($(this).prop("checked")) {
				$("#tab1").removeClass("show active");
				$("#tab2").addClass("show active");
				controllOdometer(2);
			} else {
				$("#tab2").removeClass("show active");
				$("#tab1").addClass("show active");
			}
		});

		/*====================== Glightbox Gallery ======================*/

		function tjGalleryFunc(selector, effect) {
			if (document.querySelector(`.${selector}`)) {
				const lightbox = GLightbox({
					selector: `.${selector}`,
					width: "70vw",
					openEffect: effect || "zoom",
					slideEffect: "fade",
					loop: true,
				});
			}
		}
		tjGalleryFunc("tj-gallery-item");

		/*====================== Rating ======================*/
		if ($(".fill-ratings span").length > 0) {
			var star_rating_width = $(".fill-ratings span").width();
			$(".star-ratings").width(star_rating_width);
		}

		/*====================== Title Animation ======================*/
		if ($(".title-animation").length) {
			let animatedTextElements = document.querySelectorAll(".title-animation");

			animatedTextElements.forEach(element => {
				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element, start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});
		}
	});
})(jQuery);
