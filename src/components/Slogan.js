import React, { useEffect, useRef } from "react";

export default function Slogan() {
	const sloganRef = useRef(null);
	const sloganDesRef = useRef(null);

	useEffect(() => {
		const sloganDiv = sloganRef.current;
		const sloganDesDiv = sloganDesRef.current;

		if (sloganDiv || sloganDesDiv) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate__fadeInDown");
					} else {
						entry.target.classList.remove("animate__fadeInDown");
					}
				});
			});

			observer.observe(sloganDiv);
			observer.observe(sloganDesDiv);

			return () => {
				if (sloganDiv) {
					observer.unobserve(sloganDiv);
				}
				if (sloganDesDiv) {
					observer.unobserve(sloganDesDiv);
				}
			};
		}
	}, []);
	return (
		<div class="w-full bg-[#1E1B1E] rounded-[20px] p-8 flex flex-col h-[70%]">
			<h1
				class="slogan text-white font-sans text-4xl lg:text-8xl self-center m-auto animate__animated"
				ref={sloganRef}>
				I build stuff.
			</h1>
			<p
				class="slogan_des text-white font-sans text-xl sm:text-2xl animate__animated "
				ref={sloganDesRef}>
				{" "}
				Full-stack engineer with 3 years of internship experience building
				full-stack and machine learning projects
			</p>
		</div>
	);
}
