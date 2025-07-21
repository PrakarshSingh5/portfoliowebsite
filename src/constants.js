// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.jpeg';
import cssLogo from './assets/tech_logo/css.webp';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/React.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.webp';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
// import webverseLogo from './assets/company_logo/webverse_logo.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import ais from './assets/education_logo/ais.png';
import mmmut from './assets/education_logo/mmmut.jpeg';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png';
import homygo from './assets/work_logo/homygo.png';
import travel from './assets/work_logo/travel.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'Postgre SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// export const experiences = [
//   {
//     id: 2,
//     img: newtonschoolLogo,
//     role: "Frontend Intern",
//     company: "Newton School",
//     date: "September 2021 - August 2022",
//     desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
//     skills: [
//       "HTML",
//       "CSS",
//       "Javascript",
//       "Bootstrap",
//       "Figma",
//       "Material UI",
//     ],
//   },
// ];

export const education = [
  {
    id: 1,
    img: mmmut,
    school: "MMMUT, Gorakhpur",
    date: "Dec 2021 - May 2025",
    grade: "8.5 CGPA",
    degree: "Bachelor of Technology - B.Tech (Electronics and Communication Engineering)",
  },
  {
    id: 2,
    img: ais,
    school: "Ajmani International School",
    date: "Apr 2020 - March 2021",
    grade: "86.7%",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: ais,
    school: "Ajmani International School",
    date: "Apr 2017 - March 2018",
    grade: "80%",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio",
    description:
      "A responsive MERN stack portfolio showcasing my projects, skills, and testimonials.Built with Tailwind CSS, Framer Motion, and real- time MongoDB Atlas integration.Includes smooth animations, carousel, and a clean, mobile - friendly design.",
      image: portfolio,
  tags: ["HTML", "Tailwind CSS", "JavaScript", "React JS", "MongoDB", "Express.js", "Node.js"],
  github: "https://github.com/PrakarshSingh5",
  webapp: "https://portfolio-frontend-jwq5.onrender.com/",
    },
{
  id: 1,
    title: "HomyGo",
      description:
  "A MERN-based Airbnb-inspired app for property listing and booking. Features user auth, search filters, and MongoDB Atlas backend. Built to demonstrate full-stack development with a modern UI.",
    image: homygo,
      tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/anshmanitripathi/Homygo",
          webapp: "https://github.com/anshmanitripathi/Homygo",
    },
{
  id: 2,
    title: "Travelling Website",
      description:
  "A static travel site using HTML, CSS, and JavaScript.Highlights destinations with animations and responsive layouts.Perfect for showcasing front-end design and interactivity.",
    image: travel,
      tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/anshmanitripathi/learning.travel.website",
          webapp: "https://anshmanitripathi.github.io/learning.travel.website/",
    },
  ];  