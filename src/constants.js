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
import redis from './assets/tech_logo/redis.png'
import queue from './assets/tech_logo/queu.png'
import aws from './assets/tech_logo/aws.png'
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
import emailscrapper from './assets/work_logo/emailscrapper.jpeg'
import algo from './assets/work_logo/algo.jpeg'
import blog from './assets/work_logo/blog.png';
import snaptrade from './assets/work_logo/snaptrade.png'



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
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Redis', logo: redis },
      { name: 'Bull MQ', logo: queue },
      { name: 'AWS S3', logo: aws },

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
    title: "Email Scrapper",
    description:
      "Developed a Python script that connects to the Gmail API to automatically fetch attachments from emails sent by specific organization domains. Extracted files and metadata are saved in JSON format for streamlined access and processing.",
      image: emailscrapper,
  tags: ["Python", "Gmail API", "OAuth 2.0", "JSON"],
  github: "https://github.com/PrakarshSingh5/EmailScrapper",
  webapp: "#",
    },
    {
      id: 1,
      title: "Algorithm Visualize",
      description:
        "The Algorithm Visualizer is an interactive web application designed to bring the abstract world of sorting algorithms to life. By representing data as dynamic bars, the project provides a clear and intuitive way to understand how various sorting algorithms work step-by-step.",
        image: algo,
    tags: ["React", "DSA", "Javascript", "CSS"],
    github: "https://github.com/PrakarshSingh5/DSA-algovisulsizer",
    webapp: "https://dsa-algovisulsizer.vercel.app/",
      },
{
  id: 2,
    title: "SnapTrade",
      description:
  "Developed a comprehensive full-stack web application leveraging React.js, Redux Toolkit, and React Router for a dynamic and responsive frontend UI. Implemented a robust backend infrastructure using Node.js, Express, and MongoDB, with Mongoose asODM, ensuring efficient data management and API interactions Integrated advanced features including JWT authentication, Razorpay payment processing, and Cloudinary for media management", 
    image: snaptrade,
      tags: ["Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/PrakarshSingh5",
          webapp: "https://snap-trade.vercel.app/",
    },
{
  id: 3,
    title: "Blog Website",
      description:
  "Created a sophisticated web application leveraging Node.js for efficient API management alongside React as the client-side framework",
    image: blog,
      tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/PrakarshSingh5",
          webapp: "https://project-tan-seven-19.vercel.app/",
    },
  ];  