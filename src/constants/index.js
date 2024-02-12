import {
	mobile,
	backend,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	analogdevices,
	macys,
	monsters,
	crwnclothing,
	threejs,
	portfolio,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Developer",
		icon: mobile,
	},
	{
		title: "UI Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Front End Developer",
		company_name: "Analog Devices",
		icon: analogdevices,
		iconBg: "#E6DEDD",
		date: "2022 - 2023",
		points: [
			"Developed components using the TanStack library to display data in tabular format which reduced loading times by 30%.",
			"Increased the performance of a React application by optimizing state management and component rendering.",
			"Created a functional search page using the Semantic UI library.",
			"Used object-oriented programming concepts to develop UI components that could be reused across the web application.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Utilized React best practices, such as component-based development, testing, immutable state and pure functions.",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"Optimized React application performance and scalability by using techniques such as memoization and lazy loading.",
		],
	},
	{
		title: "Front End Engineer",
		company_name: "Macy's",
		icon: macys,
		iconBg: "#E6DEDD",
		date: "2018 - 2019",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Constructed UI framework for Omni-Channel Online & Store Purchase History, and Order Returns pages using React JS.",
			"Optimized code with JavaScript ES6 to reduce page loading time by 15%, allowing customers to access information faster.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "Porfolio",
		description:
			"A web portfolio project is a digital showcase that allows individuals to present their skills, achievements, and work in a visually appealing and accessible manner. ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "threejs",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: portfolio,
		source_code_link: "https://github.com/syed-khalid/3d_porfolio",
	},
	{
		name: "Crown Clothing",
		description:
			"A web application that allows users to buy and shop different shirts, jackets, pants and shoes. ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: crwnclothing,
		source_code_link: "https://github.com/syed-khalid/crwn-clothing",
	},
	{
		name: "Monsters Rolodex",
		description:
			"A web app that shows a monsters rolodex and has a search feature intergrated in it.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		],
		image: monsters,
		source_code_link: "https://github.com/monsters-rolodex",
	},
];

export { services, technologies, experiences, testimonials, projects };
