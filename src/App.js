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

function App() {
	return (
		<div className="App">
			<div class="flex flex-col lg:flex-row animate__animated animate__fadeIn justify-between mb-5">
				<div class="basis-[40%] md:mr-5">
					<Name />
					<div class="flex flex-col sm:flex-row min-h-[15em]">
						<Avatar />
						<Education />
					</div>
					<LinkBar />
					<About />
				</div>
				<div class="basis-[58%] mr-2">
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

			<div class="container m-auto">
				<div class="horizontal-scrolling-items ">
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">React.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Next.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Javascript.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Node.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Express.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Python.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">FastAPI.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">RestAPI.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">React.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Next.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Javascript.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Node.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Express.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">Python.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">FastAPI.js</p>
					</div>
					<div class="horizontal-scrolling-items__item p-4 bg-[#1E1B1E] rounded-lg">
						<p class=" text-white">RestAPI.js</p>
					</div>
				</div>
			</div>
			<h1 class="text-white text-4xl font-sans font-bold m-2">Experience </h1>

			<div class="flex flex-row snap-x overflow-auto w-full ">
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
			<h1 class="text-white text-4xl font-sans font-bold m-2">Portfolio</h1>

			<div class="flex flex-col m-auto sm:flex-row flex-wrap justify-between">
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
					githubUrl="https://github.com/nourishnew/nourishdev"
					website="https://dnourishdev.com"
					description="A personal website built using React.js, Tailwind CSS, Material UI displaying my work experience and different personal projects. Built with a mobile friendly and modern dark them design "
				/>
			</div>
		</div>
	);
}

export default App;
