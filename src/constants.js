
import htmlLogo from './assets/tech_logo/html.jpeg';
import cssLogo from './assets/tech_logo/css.webp';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/React.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.webp';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import redis from './assets/tech_logo/redis.png'
import queue from './assets/tech_logo/queu.png'
import aws from './assets/tech_logo/aws.png'
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// Education Images
import ais from './assets/education_logo/ais.png';
import mmmut from './assets/education_logo/mmmut.jpeg';

// Project Images - Only importing what exists
import algo from './assets/work_logo/algo.jpeg'
import urlshortner from './assets/work_logo/urlshortner.jpeg'
import fintech from './assets/work_logo/fintech.jpeg' 
import ratelimiter from './assets/work_logo/ratelimiter.jpeg' 
import trigger from './assets/work_logo/trigger.jpeg' 

// Helper for placeholder icons
const companyIcon = "https://via.placeholder.com/150";
const databaseIcon = "https://via.placeholder.com/150";
const projectPlaceholder = "https://via.placeholder.com/600x400";

export const SkillsInfo = [
  {
    title: 'AI & Automation',
    skills: [
      { name: 'Agentic AI', logo: pythonLogo },
      { name: 'LLMs', logo: pythonLogo },
      { name: 'Prompt Engineering', logo: vscodeLogo },
      { name: 'LangChain', logo: pythonLogo },
      { name: 'RAG Pipelines', logo: databaseIcon },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Nest JS', logo: nodejsLogo },
      { name: 'Go', logo: cLogo },
      { name: 'Microservices', logo: aws },
      { name: 'Webhooks', logo: postmanLogo },
      { name: 'Veem API', logo: aws },
      { name: 'Wise API', logo: aws },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Redis', logo: redis },
      { name: 'AWS', logo: aws },
      { name: 'Docker', logo: aws },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "FINMO",
    date: "Present",
    desc: "Building scalable backend systems and financial technology solutions. Integrated banking APIs like Veem and Wise for global payments and handled complex webhook architectures.",
    skills: ["NestJS", "BullMQ", "Redis", "TypeScript", "Node.js", "API Integration"],
    logo: companyIcon
  },
  {
    id: 2,
    role: "Shopify Developer Intern",
    company: "BlackBytt",
    date: "Oct 2024 - Apr 2025",
    desc: "Worked on Shopify store development and customization. Mastered Liquid, CSS, JS, and JSON for dynamic themes.",
    skills: ["Liquid", "CSS", "JavaScript", "JSON", "Debugging"],
    logo: companyIcon
  },
  {
    id: 3,
    role: "Problem Setter Intern",
    company: "iMocha",
    date: "Nov 2022 - Jan 2024",
    desc: "Created and curated Data Structures and Algorithms problems across multiple programming languages. Ensured high-quality test cases and problem statements.",
    skills: ["C++", "Python", "Java", "DSA", "Problem Solving"],
    logo: companyIcon
  },
];

export const education = [
  {
    id: 1,
    img: mmmut,
    school: "MMMUT, Gorakhpur",
    date: "Dec 2021 - May 2025",
    grade: "8.5 CGPA",
    degree: "B.Tech (Electronics and Communication Engineering)",
  },
  {
    id: 2,
    img: ais,
    school: "Ajmani International School",
    date: "Apr 2020 - March 2021",
    grade: "86.7%",
    degree: "CBSE(XII) - PCM",
  },
];

export const projects = [
  {
    id: 1,
    title: "FinTechKit 🚀",
    description: "Production-ready Go framework for fintech API integration. Features unified interfaces for Stripe/Razorpay/Plaid, built-in auth management, reliability patterns (circuit breakers, retries), and webhook handling.",
    image: fintech,
    tags: ["Go", "Fintech", "Stripe/Razorpay", "Fiber"],
    github: "https://github.com/PrakarshSingh5/fintechkit",
    webapp: "#",
  },
  {
    id: 2,
    title: "Rate Limiter Service",
    description: "High-performance distributed rate limiting service handling millions of requests. Supports Token Bucket/Sliding Window algorithms, Redis-backed state, GRPC/REST interfaces, and smart webhook notifications.",
    image: ratelimiter,
    tags: ["TypeScript", "Redis", "Fastify", "Distributed Systems"],
    github: "https://github.com/PrakarshSingh5/rate-limiter-service",
    webapp: "#",
  },
  {
    id: 3,
    title: "Trigger Database Engine",
    description: "Custom database trigger engine with its own DSL (Domain Specific Language). Parse and execute complex rules (ON update WHEN age > 18 DO set eligible=true) with infinite loop prevention and execution logging.",
    image: trigger,
    tags: ["Node.js", "AST Parsing", "React", "DSL Design"],
    github: "https://github.com/PrakarshSingh5",
    webapp: "#",
  },
  {
    id: 4,
    title: "AI Automation System",
    description: "A comprehensive system for automating workflows using AI agents.",
    image: projectPlaceholder,
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    github: "https://github.com/PrakarshSingh5",
    webapp: "#",
  },
  {
    id: 5,
    title: "URL Shortener",
    description: "High-performance URL shortener built with Go, Redis, and Postgres.",
    image: urlshortner,
    tags: ["Go", "Redis", "PostgreSQL"],
    github: "https://github.com/PrakarshSingh5/url-shortner",
    webapp: "#",
  },
  {
    id: 6,
    title: "SnapTrade",
    description: "Full-stack image marketplace with payment integration.",
    image: projectPlaceholder,
    tags: ["MERN Stack", "Redux", "Razorpay"],
    github: "https://github.com/PrakarshSingh5",
    webapp: "https://snap-trade.vercel.app/",
  },
];