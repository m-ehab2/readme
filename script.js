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
		350: {
			items: 1,
		},
		750: {
			items: 2,
		},
		1001: {
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
