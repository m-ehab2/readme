// $(".main-carasoul-main-body").click(function (e) {
// 	let $carousel = $(this);
// 	let $cards = $carousel.children(".card");
// 	let cardWidth = $cards.eq(0).outerWidth(true); // Include margins
// 	let translateX = $carousel.data("translateX") || 0; // Initial translation or 0
// 	translateX -= cardWidth;
// 	$carousel.css({
// 		transform: `translateX(${translateX}px)`,
// 		transition: "transform 0.5s ease",
// 	});
// 	$carousel.data("translateX", translateX);
// });
var slider = tns({
	items: 3,
	controls: true,
	responsive: {
		1: {
			items: 1,
		},
		768: {
			items: 3,
		},
	},

	container: "#responsive",
	swipeAngle: false,
	speed: 200,
	nav: false,
	controlsContainer: ".controlsContainer",
	mouseDrag: true,
	gutter: 5,
	// autoplay: true,
	// autoplayTimeout: 3000,
});
var slider1 = tns({
	items: 1,
	controls: true,
	container: "#responsive1",
	swipeAngle: false,
	speed: 200,
	nav: false,
	controlsContainer: ".controlsContainer1",
	mouseDrag: true,
	gutter: 5,
});
var slider2 = tns({
	items: 1,
	controls: true,
	container: "#responsive2",
	swipeAngle: false,
	speed: 200,
	nav: false,
	controlsContainer: ".controlsContainer2",
	mouseDrag: true,
	gutter: 5,
});

// function prevent(e) {
// 	console.log("ss");
// 	e.preventdefault();
// }
(function () {
	"use strict";
	window.addEventListener(
		"load",
		function () {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName("needs-validation");
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(
				forms,
				function (form) {
					form.addEventListener(
						"submit",
						function (event) {
							if (form.checkValidity() === false) {
								event.preventDefault();
								event.stopPropagation();
							}
							form.classList.add("was-validated");
						},
						false
					);
				}
			);
		},
		false
	);
})();
