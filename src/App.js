import "./App.css";

import Slogan from "./components/Slogan";
import Card from "./components/Card";
import Name from "./components/Name";
import Job from "./components/Job";
import Avatar from "./components/Avatar";
import Education from "./components/Education";
import LinkBar from "./components/LinkBar";
import About from "./components/About";
import Project from "./components/Project";
import "animate.css";
import { useEffect, useRef, useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
	const skillDivRef = useRef(null);
	const projectsDivRef = useRef(null);
	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		setAnswer("");
		setIsLoading(true);
		if (e) {
			e.preventDefault();
		}

		if (question.trim() === "") {
			setError("Question cannot be empty.");
			return;
		}

		setError("");
		await getAnswer();
	};

	async function getAnswer() {
		setIsLoading(true);
		let query = question;

		const response = await axios.post(
			"https://nourishch-server.onrender.com/answer",
			{
				question: query,
			}
		);
		setIsLoading(false);
		setAnswer(response.data.answer);
	}

	useEffect(() => {
		const skillDiv = skillDivRef.current;
		const projectsDiv = projectsDivRef.current;

		if (skillDiv || projectsDiv) {
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate__fadeIn");
					}
				});
			});

			observer.observe(skillDiv);
			observer.observe(projectsDiv);
			return () => {
				if (skillDiv) {
					observer.unobserve(skillDiv);
				}
				if (projectsDiv) {
					observer.unobserve(projectsDiv);
				}
			};
		}
	}, []);
	return (
		<div className="App">
			<form onSubmit={handleSubmit} className="w-full">
				<TextField
					label="Ask anything about me. (Powered by OpenAI Gpt 4 )"
					variant="filled"
					fullWidth
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					error={!!error} // error prop turns the TextField red if there's an error
					helperText={error} // helperText displays the error message below the TextField
					placeholder="Type your question here..."
					InputProps={{
						style: {
							"&::placeholder": {
								color: "white",
							},
						},
					}}
					sx={{
						borderRadius: "20px",
						backgroundColor: "#333", // Background color of the TextField
						input: {
							color: "#D3D3D3", // Text color inside the TextField
							"::placeholder": {
								color: "#D3D3D3", // Placeholder text color
								opacity: 1, // Ensures the white color is not faded
							},
						},
						"& .MuiInput-underline:before": {
							borderBottomColor: "white", // Color of the underline before focusing
						},
						"& .MuiInputLabel-root": {
							color: "white", // Label text color
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "#ccc", // Border color
							},
							"&:hover fieldset": {
								borderColor: "#888", // Border color on hover
							},
							"&.Mui-focused fieldset": {
								borderColor: "#3f51b5", // Border color when focused
							},
						},
					}}
				/>
				<Button
					className="w-48 mb-5 bg-[#1E1B1E] rounded-lg"
					type="submit"
					variant="contained"
					style={{
						margin: "20px",
						backgroundColor: "#8184D2",
						borderRadius: "20px",
					}}>
					Submit
				</Button>
			</form>
			<div className="flex flex-row p-5">
				<div
					className="bg-[#1E1B1E] p-2 m-2 rounded-[10px] cursor-pointer"
					onClick={() => {
						setQuestion("Does he know how to center a div?");
					}}>
					<p className="text-white ">Does he know how to center a div?</p>
				</div>
				<div
					className="bg-[#1E1B1E] p-2 m-2 rounded-[10px] cursor-pointer"
					onClick={() => {
						setQuestion(
							"I am looking to hire a full-stack engineer? Is he a good fit?"
						);
					}}>
					<p className="text-white ">
						I am looking to hire a full-stack engineer? Is he a good fit?
					</p>
				</div>
				<div
					className="bg-[#1E1B1E] p-2 m-2 rounded-[10px] cursor-pointer"
					onClick={() => {
						setQuestion("Did he take any courses in Distributed sytems?");
					}}>
					<p className="text-white ">
						Did he take any courses in Distributed sytems?
					</p>
				</div>
			</div>
			{isLoading && (
				<CircularProgress
					color="inherit"
					sx={{
						color: "white",
					}}
				/>
			)}
			{answer && (
				<h1 className="text-white text-left text-l md:text:2l animate__animated animate__fadeIn animate__delay-1s m-5">
					{answer}
				</h1>
			)}
			<div class="flex flex-col lg:flex-row justify-between mb-5">
				<div class="basis-[40%] md:mr-5 animate__animated animate__fadeIn">
					<Name />
					<div class="flex flex-col sm:flex-row min-h-[15em]">
						<Avatar />
						<Education />
					</div>
					<LinkBar />
					<About />
				</div>
				<div class="basis-[58%] mr-2 ">
					<Slogan />
					<div class="flex flex-row justify-between mt-5 overflow-x-scroll sm:overflow-hidden">
						<Card text="Front-end development" color="bg-[#00C39A]" />
						<Card text="Back-end development" color="bg-[#FFBF3C]" />
						<Card
							text="Database and Cloud management (AWS)"
							color="bg-[#FE6D79]"
						/>
					</div>
				</div>
			</div>

			<div class=" container m-auto  ">
				<div class="horizontal-scrolling-items ">
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">React.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Next.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">JavaScript</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Node.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Express.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Python</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">FastAPI</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">RestAPI</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">React.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Next.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">C++</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Docker</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">AWS</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Kafka</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">SpringBoot</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">SQL</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Pytorch</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">LLM</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Node.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Express.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Python</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">FastAPI.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">RestAPI.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">C++</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Docker</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">AWS</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Kafka</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">SpringBoot</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">SQL</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Node.js</p>
					</div>
				</div>
			</div>
			<h1 class="text-[#8284d3] text-4xl font-sans font-bold m-2">
				Experience{" "}
			</h1>
			<div class="flex flex-row">
				<NavigateBeforeIcon
					className="slideLeft m-auto cursor-pointer"
					color="secondary"
					style={{ color: "#8284d3" }}
				/>
				<div
					class="job_container skill_div flex flex-row overflow-auto w-full animate__animated"
					ref={skillDivRef}>
					<Job
						company="General Dynamics"
						imageUrl="/gd.png"
						Role="AI Developer"
						skills="Python,C++, ROS2, LLM, Pytorch, Docker"
						duration="May 2024 - April 2025"
					/>
					<Job
						company="Blackberry"
						imageUrl="/bb.jpg"
						Role="Open Source Developer Intern"
						skills="C++, Cmake, Terraform, Docker"
						duration="Sep - Dec 2023"
					/>
					<Job
						company="Ultimate Kronos Group"
						imageUrl="/ukg.png"
						Role="Software Engineering Intern"
						skills="Java,SpringBoot, SQL,RabbitMQ, TeamCity CI/CD"
						duration="Jan - April 2023"
					/>
					<Job
						company="RBC"
						imageUrl="/rbc.png"
						Role="Software Developer Intern"
						skills="Java, JPA, SpringBoot, SQL, Junit, SonarQube"
						duration="Jan - April 2022"
					/>
					<Job
						company="Ford"
						imageUrl="/ford.png"
						Role="Firmware Developer Intern"
						skills="C, Linux, yocto"
						duration="Jan - April 2022"
					/>
					<Job
						company="Shomigo"
						imageUrl="/shomigo.png"
						Role="Software Developer Intern"
						skills="React.js, Javscript, Node.js, Express.js , Neo4j"
						duration="Jan - April 2022"
					/>
				</div>
				<NavigateNextIcon
					className="slideRight m-auto cursor-pointer"
					color="secondary"
					style={{ color: "#8284d3" }}
				/>
			</div>
			<h1 class="text-[#8284d3] text-4xl font-sans font-bold m-2">Portfolio</h1>

			<div
				class="flex flex-col m-auto sm:flex-row flex-wrap justify-between animate__animated"
				ref={projectsDivRef}>
				<Project
					title="Dojla"
					metaTitle="A cryptocurrency trading simulator webapp"
					githubUrl="https://github.com/nourishnew/dojla-public"
					website="https://dojla.com"
					description="A cryptocurrency trading simulator webapp built using React.js, Javscript, Firebase Auth, Firestore,Axios"
				/>
				<Project
					title="ReelsTime"
					metaTitle="A machine learning project that trims and displays relevant events from a longer soccer videos. Available as a web app"
					githubUrl="https://github.com/nourishnew/soccer-highlights-webapp"
					website="https://github.com/nourishnew/soccer-highlights-webapp"
					description=" A web app built using React.js, AWS SDK, FastAPI that allows users to upload a long soccer broadcase videos, uses our custome built machine learning model to analyze and extrac important events such as goals, yelloe cards, red cars, injuries and displays the video clips individually in a grid format"
				/>
				<Project
					title="nourishdev.com"
					metaTitle="A personal website showcasing my work"
					githubUrl="https://github.com/nourishnew/personal-website"
					website="https://nourishch.com"
					description="A personal website built using React.js, Tailwind CSS, Material UI displaying my work experience and different personal projects. Built with a mobile friendly and modern dark them design "
				/>
			</div>
			<p class="text-center text-white mt-5">
				&copy; 2024 nourishch.com. All rights reserved.
			</p>
		</div>
	);
}

export default App;
