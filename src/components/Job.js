import React from "react";

export default function Job({ company, skills, imageUrl, Role, duration }) {
	return (
		<div class="p-3 sm:p-4 m-2 max-w-[40em] bg-[#1E1B1E] rounded-[20px] snap-center  min-w-[18em] sm:min-w-[23em] md:min-w-[28em] lg:min-w-[35em]  ">
			<h1 class="text-white text xl sm:text-2xl font-bold font-sans ">
				{company}
			</h1>
			<img
				src={imageUrl}
				alt="logo"
				class="size-28 md:size-40 rounded-lg self-center m-auto mt-5"
			/>
			<h1 class="text-white text-xl sm:text-2xl font-bold font-sans mt-5">
				{Role}
			</h1>
			<h2 class="text-white text-xl font-sans mt-5">Skills: {skills}</h2>
			<h2 class="text-white text-2xl font-sans mt-5 text-right">{duration}</h2>
		</div>
	);
}
