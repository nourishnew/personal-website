window.addEventListener("load", function () {
	const buttonRight = document.querySelector(".slideRight");
	const buttonLeft = document.querySelector(".slideLeft");
	console.log("scroller ");
	buttonRight.onclick = function () {
		document
			.querySelector(".job_container")
			.scrollBy({ left: 300, behavior: "smooth" });
		console.log("scrolling right");
	};
	buttonLeft.onclick = function () {
		document
			.querySelector(".job_container")
			.scrollBy({ left: -300, behavior: "smooth" });
		console.log("scrolling left");
	};
});
