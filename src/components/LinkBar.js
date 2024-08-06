import React from "react";

export default function LinkBar() {
	return (
		<div class="flex flex-row p-5 lg:p-10 justify-between bg-white mt-5 rounded-[20px] min-w-[300px] w-full">
			<a
				href=" https://www.linkedin.com/in/nourish-cherish/"
				target="_blank"
				rel="noreferrer">
				<img
					src="/linkedin.png"
					alt="avatar"
					class="rounded-md size-8 sm:size-10 md:size-12 lg:size-14 logo"
				/>
				<p>LinkedIn</p>
			</a>
			<a href="https://github.com/nourishnew" target="_blank" rel="noreferrer">
				<img
					src="/github.png"
					alt="avatar"
					class="rounded-md size-8 sm:size-10 md:size-12 lg:size-14  logo"
				/>
				<p>Github</p>
			</a>
			<a href="mailto:ncherish@uwaterloo.ca" target="_blank" rel="noreferrer">
				<img
					src="/mail.png"
					alt="avatar"
					class="rounded-md size-8 sm:size-10 md:size-12 lg:size-14  logo"
				/>
				<p>Email me</p>
			</a>
			<a
				href="https://nourish-cherish-resume.tiiny.site/"
				target="_blank"
				rel="noreferrer">
				<img
					src="/resume.png"
					alt="avatar"
					class="rounded-md size-8 sm:size-10 md:size-12 lg:size-14  logo"
				/>
				<p>Resume</p>
			</a>
		</div>
	);
}
