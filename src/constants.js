// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import iiitlogo from './assets/education_logo/IIIT_R_Logo.png';
import FRIlogo from './assets/education_logo/DeNobili_Logo.png';
import Schoollogo from './assets/education_logo/Rajkamal_Logo.png';

// Project Section Logo's
import Aihomepage from './assets/work_logo/homepage_ai.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import imagesearchLogo from './assets/work_logo/image_search.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: iiitlogo,
      school: "IIIT Ranchi",
      date: "August 2023 - May 2027",
      grade: "7.75 CGPA",
      desc: "I am a third-year undergraduate student pursuing a Bachelor of Technology in Electronics and Communication Engineering at the Indian Institute of Information Technology, Ranchi.",
      degree: "Bachelor of Technology - B.Tech (Electronics and Communication Engineering)",
    },
    {
      id: 1,
      img: Schoollogo,
      school: "Rajkamal Saraswati Vidya Mandir, dhanbad",
      date: "Apr 2021 - March 2023",
      grade: "94%",
      desc: "I completed my class 12 education from Rajkamal Saraswati Vidya Mandir School, Dhanbad, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: FRIlogo,
      school: "De Nobili School FRI, Dhanbad",
      date: "Apr 2020 - March 2021",
      grade: "87.5%",
      desc: "I completed my class 10 education from De Nobili School FRI, Dhanbad, under the ICSE board, where I studied Science with Computer.",
      degree: "ICSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI SaaS Application",
      description:
        "a powerful suite of AI-driven tools designed to boost creativity, productivity, and efficiency. From generating high-quality articles and catchy blog titles to creating stunning AI-generated  images, our platform has it all. Effortlessly remove backgrounds, erase unwanted objects from photos, and get in-depth AI-powered resume reviews — all in one place",
      image: Aihomepage,
      tags: ["HTML","Tailwind CSS", "React JS", "API","Node JS", "Express JS", "PostgreSQL", "OpenAI", "Cloudinary"],
      github: "https://github.com/Roshan-keshri/QuickAI",
      webapp: "https://quick-ai-ruddy.vercel.app/",
    },
    {
      id: 1,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "",
      webapp: "https://imagsearch.netlify.app/",
    },
  ];  