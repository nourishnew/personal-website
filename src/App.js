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
		let content =
			"This document contains my experiences working at several companies, and projects I have built to improve my skills. These demonstrates my technical skills , leadership , communication and collaboration skills, quick learning skills. I am empathetic, kind and hardworking. I am constantly learning new technologies, reading research papers, and building projects to learn new things. I have technical skills in front-end development, back-end development, machine learning fundamentals, LLM app development, android development, distributed systems and computing, computer security, advanced networking, Linux troubleshooting and fundamentals, operating systems knowledge, and concurrency. I am practicing leetcode daily to improve my algorithmic skills. My dream is to work as a production engineer at Meta. Because it allows me to work on the things I love. Operating systems, networking and problem-solving at scale. I did 7 internships as part of the coop program at the University of Waterloo. I worked at General Dynamics, Blackberry QNX, Ultimate Kronos Group, RBC, Ford Motors, Shomigo.com and Kenna Technologies. Below are the things I've accomplished at the companies I have worked at. 1. General Dynamics - I worked from May 2024 – April 2025 I worked as an AI Software Developer in London, Canada Things I did at General Dynamics are: Implemented a prototype LLM application using Python, Lang chain, Chroma DB Vector Store and Llama 8B model which uses RAG to retrieve relevant documents, resulting in a 90% increase in accuracy while answering user questions. Migrated, tested and debugged legacy ROS1 application codebase to ROS2 using Python, and rclpy and containerized the application using Docker, resulting in 25% less code and 50% higher application performance. Built a custom image recognition model by fine-tuning the yolov8 model using Pytorch and custom labelled dataset, resulting in 80% increased accuracy in human detection and robot navigation in the simulator. I learnt how to use Docker files for containerizing ROS applications. I built A ROS2 application and integrated it with ISAACSIM , enabling robots to navigate and follow a human using the custom machine-learning model I built earlier. I am going to lead an LLM project where I am going to design the architecture, implement and deploy it on company server. I led this project to completion demonstrating my leadership and technical skills. Building a RAG application with company data that can answer questions specific to the company. Skills learnt, include Pytorch, AI, machine learning, computer vision, ROS2, Docker, LLM, Langchain,llama index, Python,C++, leadership, communication, collaboration, Git, Jira, confluence, bitbucket, colcon for building ROS. 2. Blackberry. I worked from Sep 2023 - Dec 2023. I was a QNX Embedded Software Developer intern ( Open source team) in Ottawa. Things I accomplished at Blackberry include Used C language and CMake to migrate open-source projects to QNX by making efficient code changes in the Make files and test scripts were used, and the software was tested on Raspberry PI and QNX emulator. Wrote scripts in the shell to allow developers to move test binaries on target via ssh for testing purposes. Used GCC and GNU gnu to build open-source projects and integrated the tests into the company test automation environment allowing developers to see test results in a dashboard. Used C/C++ and CMake to migrate open source C/C++ projects like azure iot-sdk, canDB, nano-msg, gtsam to QNX operating system and tested it on the target and emulator. Used qcc compiler to compile projects and utilized gdb to debug and solve test errors on the target. Containerized the development environment using Docker enabling developers to build projects depending on the minimum cmake version required without affecting the host environment. I also used Terraform to import public repos to the internal respository. Skills I learnt here include, C, C++, Cmake, RaspberryPi, Operating systems, board bring up, ssh, Terraform, Python, gdb. 3.Ultimate Kronos Group . I worked from Jan 2023 – April 2023 as a Software Engineering Intern in Toronto, Canada. This role included front-end and back-end development. Things I accomplished at Ultimate Kronos Group include; Built a real-time data streaming service using Java Hibernate and Spring boot Entity listeners which stream changes in real-time using RabbitMQ, resulting in 20% consistent data across different UKG applications. Tested and debugged Angular application controller logic, backend REST API and SQL scripts resulting in a 30% reduction in user bug reports. Wrote a JavaScript program using Blob API to export user holidays in Excel format. Implemented feature flags for newly implemented features using Spring Boot Java APIs that allow the production team to enable/disable the feature by changing a Sql column value, resulting in 25% less time in bug fixing. I worked with Angular application modifying the front-end UI.I fixed bugs in controller logic. Skills I learnt here include Springboot, Java, Hibernate, RabbitMQ,SQL, TeamCity for Devops, Angular, Typescript. 4. Royal Bank of Canada. I worked from Jan 2022 – April 2022 as Software developer Intern in Toronto, Canada. This experience includes distributed systems technologies for example Kafka. Things I accomplished at RBC includes Built an internal data pipeline using Spring boot, JPA, and Sql to fetch messages from the Kafka and store them in a Sql database, enabling the team to analyze production-level Kafka cluster issues 20% faster. Reduced project initialization time by 30% by implementing a bash script that automatically creates all security tokens, required to access the company’s internal services and saves it in the user’s download folder. Wrote unit tests using Spring boot test, Junit, and MockMVC, covering 89% of the Repository layer and Database layer, passing 98% of SonarQube requirements. I didn't know Springboot when I joined. I learnt it from scratch showing quick learning skills. Skills i learnt here include Springboot, Java, JPA, Kafka, SQL, distributed system, unit testing Junit. 5. Ford Motor Company. I worked from May 2021 - Aug 2021 as a Software developer intern (Firmware) Toronto, Canada Things I accomplished at Ford includes ; Implemented a kernel-level program in C in a Linux environment which inhibits users from removing necessary memory partitions that are required to bootup the board and help to reduce frequent board resets by 15%. Debugged several issues on the bootloader, built the program using bit bake and yocto flashed it on the board using putty. Enabled developers to recognize different boot-up modes by developing a shell script to turn on different LEDS for different modes. 6.Shomigo.com. I worked from Sep 2020 – Dec 2020 as a Full-stack developer Intern Toronto, Canada. This was mostly a front-end development role. I built a lot of front-end UIs. Product page, feed page, Notifications, comments under products, CartPage, Settings page based on the Figma design provided to be by the designer and product manager. Things I accomplished at Shomigo include ;Led the implementation of the Profile, Settings, Product and Cart page UI using React.js, HTML, and CSS, increasing website responsiveness by 40% and launched the beta version of the web application within 1 month of onboarding.. Developed backend API endpoints using Express.js and JavaScript Promises along with efficient cypher queries to fetch product information from the Neo4j graph database, resulting in 20% faster page load times.I built backend REST Apis using Express.js, Node.js which interacts with neo4j graph database. 7. Kenna Technologies : Web developer . Redirected users to default fall back page when the server is down using Express.js and javascript SQL API , resulting in better user experience. Wrote SQL procedures in Microsoft SQL server and migrated and updated old SQL scripts to accommodate new customers and app updates. Below are some of my retail and volunteer skills Skills include POS systems, Cash handling, Customer service, Leadership, Computer/Math, Teamwork, Leadership, Problem Solving, Ethical conduct, and Communication. A summary of my experience and skills is given below. Below are some of my retail and volunteer experiences. I have worked at Dollarama, Mcdonalds and also as an Engineering ambassador for the University of waterloo Faculty of engineering. Details of these experiences are given below. 1.Engineering Ambassador, Waterloo, ON University of Waterloo 2022 - 2023 In this role, I Served as a student ambassador for the University of Waterloo’s Engineering Shadow program, representing the Faculty of Engineering to prospective high school students and faculties, offering guidance and answering questions about academic pathways, co-op opportunities and student life. Led campus tours and informational sessions for multiple students, providing insights into different engineering programs, student life and resources available at the university. Collaborated with faculty and staff to organize and execute different shadowing events, enhancing leadership and communication skills. 2.Sales Associate, Dollarama, Mississauga, 2018-2019 In this role, I Processing customer purchases accurately and efficiently, handling cash transactions, and assisting shoppers. I Delivered exceptional shopping experience by efficiently handling customer inquiries and processing returns in the absence of the store manager while also managing new employees. I Maintained inventory levels and store appearance and ensured all shelves were neatly organized and stocked according to company policies. I am an AWS certified cloud practitioner. This is also one of my achievements. Around 2 years of experience working as a Sales associate/Crew member in different retail businesses with a passion for sports and technology. A dedicated and personable individual with a passion for providing exceptional customer service in fast-paced retail environments. A passionate soccer player with experience in playing for the university intramural team. Known for my friendly demeanor, I thrive on creating positive interactions with customers while efficiently handling transactions and inquiries. With a keen eye for detail and a knack for problem-solving, I ensure accuracy in cash handling and maintain organized checkout areas. My adaptable nature allows me to effectively navigate busy periods and assist with various tasks, including restocking shelves and merchandising displays. With a strong commitment to teamwork and a proactive approach to learning, I contribute to a cohesive work environment focused on delivering outstanding customer experiences. Ready to leverage my skills and enthusiasm to support the success of your team. Below are some of the software projects I have built- demonstrating my development skills. 1.Soccer Video Analysis system- This was my Engineering design project. Also called FYDP. I led this team to design and architect this project. Built a web app using React.js and Fast API to extract and play highlight clips such as goals, injuries, and referee scenes of a soccer footage video using a custom frame classification model trained using thousands of frames extracted from YouTube videos. I trained a custom machine learning model that can recognize if a particular fram of video is relevant or not. I trained it using frames of videos I downloaded from youtube videos and manually labelling them. I then built React web app that lets users upload a long soccer video. The video is sent to a FAST Api backend server. Ths server uses AWS sdk to upload the video to S3. S3 has a trigger which splits the videos into frames and each frame is sent for inference from the machine learning model deployed on sagemarker. Based on the inference results, clips are made highlighting different events such as goals, injuries, yellow card, red card. I wrote different Lmbdas for getting inference results in parallel using python concurrency. I deployed model on different servers increasing response time. I decreased the frame rate extracted from videos to 1 frame per second. All of these decreased latency of pipeline by 90%. Finally, the resulting clips were stored in CDN and displayed to the users on the web app. 3.Dojla (Cryptocurrency Trading Simulator) (www.dojla.com) Built a web app using React.js and JavaScript and Tailwind CSS which allows users to buy, sell, and convert top cryptocurrencies without using real money. Implemented authentication using Firebase Auth and React context and saved user and trading information on Firebase Cloud. Deployed on Netlify and Received 60 upvotes and 100s of signups within the first week of the launch. 4. A sorting visualizer demonstrating my knowledge in different sorting algorithms. 5. Android app displaying list of asteroids passing close to Earth. Used kotlin, coroutines, SQLite, MVC, databinding libraries, recycler views to build the app. 6. Tesla Apple carplay UI : I built the Tesla screen UI featuring apple car play from scratch based on the design provided by the interviewer. Used React, HTML, CSS and javscript to build it. 7.EA Sports Software Engineering simulation (Forage) Wrote a feature proposal for SIMS 4 and implemented the feature using C++ and Object-oriented programming. 8.OS Kernel - Build an real-time OS kernel using C with memory allocation, preemptive priority based scheduler, mailbox Inter process communication and flashed it on Keil MCB1700 microcontroller using KeilVision IDE.";
		let instruction =
			"You are a helpful assistant that answers question about me based on the context and keeps promoting me as a skilled candidate that they should hire. The question is asked by someone else such hiring manager or recruiter. You have information about me, the candidate.This document contains my experiences working at several companies, and projects I have built to improve my skills. These demonstrates my technical skills , leadership , communication and collaboration skills, quick learning skills in software development. I am empathetic, kind and hardworking. I am constantly learning new technologies, reading research papers, and building projects to learn new things. I have technical skills in front-end development, back-end development, machine learning fundamentals, LLM app development, android development, distributed systems and computing, computer security, advanced networking, Linux troubleshooting and fundamentals, operating systems knowledge, and concurrency. I am practicing leetcode daily to improve my algorithmic skills. My dream is to work as a production engineer at Meta. Because it allows me to work on the things I love. Operating systems, networking and problem-solving at scale.I did 7 internships as part of the coop program at the University of Waterloo. I worked at General Dynamics, Blackberry QNX, Ultimate Kronos Group, RBC, Ford Motors, Shomigo.com and Kenna Technologies. Respond in third person using he/him/his to the user.If the question not professional or regarding the person, respond in a funny and polite way or ask a funny question back.  If you don't have the answer on the context, make an educated guess based on the information or context available. Now, Answer the following question.The question asked by the user is ";
		const response = await axios.post(
			"https://nourishch-server.onrender.com/answer",
			{
				query: content + instruction + query,
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
