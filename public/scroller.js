window.addEventListener("load", () => {
	const container = document.querySelector(".job_container");
	const buttonRight = document.querySelector(".slideRight");
	const buttonLeft = document.querySelector(".slideLeft");

	if (buttonRight && container) {
		buttonRight.onclick = () =>
			container.scrollBy({ left: 300, behavior: "smooth" });
	}

	if (buttonLeft && container) {
		buttonLeft.onclick = () =>
			container.scrollBy({ left: -300, behavior: "smooth" });
	}
});
