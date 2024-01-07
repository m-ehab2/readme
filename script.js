var slider = tns({
	items: 3,
	controls: true,
	responsive: {
		1: {
			items: 1,
			// autoplay: true,
			// autoplayTimeout: 5000,
		},
		768: {
			items: 2,
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
	// autoplayTimeout: 5000,
	// nav: true,
	// navPosition: "bottom",
	preventScrollOnTouch: "force",
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
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
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
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
});

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
const sidebarPosts = document.querySelectorAll(".blog-post");
const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.1,
};
const observer = new IntersectionObserver(function (entries, observer) {
	console.log(entries);
	entries.forEach((entry) => {
		console.log(entries);
		if (entry.isIntersecting) {
			entry.target.style.opacity = 1;
			entry.target.style.transform = "translateY(0)";
			observer.unobserve(entry.target);
		}
	});
}, options);
sidebarPosts.forEach((e) => {
	observer.observe(e);
});
document.addEventListener("DOMContentLoaded", function () {
	// Hide the loading screen when the page has finished loading
	const loadingScreen = document.getElementById("loadingScreen");
	loadingScreen.style.display = "none";
});
