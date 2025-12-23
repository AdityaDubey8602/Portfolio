import {
  mobile,
  backend,
  creator,
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import movix from "../assets/movix.png";
import cied from "../assets/cied.png";
import portfolio from "../assets/portfolio.png";
import oldPortfolio from "../assets/oldPortfolio.png";

import persistent from "../assets/company/persistent.png";
import prana from "../assets/company/Prana_1.png";
import micro1 from "../assets/company/micro1.png";
import cis from "../assets/company/cis.jpg";
import java from "../assets/tech/java.png";
import spring from "../assets/tech/spring.png";
import sql from "../assets/tech/sql.png";

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
    title: "Java",
    icon: mobile,
  },
  {
    title: "Spring Boot",
    icon: backend,
  },
  {
    title: "MySQL",
    icon: creator,
  },
  {
    title: "React.JS",
    icon: web,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQl",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "January 2022 - January 2024",
    points: [
      "Developed scalable backend modules using Java and Spring Boot, supporting 50K+ monthly transactions.",
      "Integrated Azure AD Single Sign-On (SSO), reducing authentication failures by 40%.",
      "Played a key role in migrating a monolithic system to microservices, cutting deployment time from hours to under 15 minutes.",
      "Improved service uptime to 99.7% by enhancing system reliability and monitoring.",
      "Worked extensively with REST APIs, Hibernate/JPA, PostgreSQL, Git, and CI/CD pipelines in an agile environment.",
    ],
  },
  {
    title: "Software Engineer – AI Trainer",
    company_name: "Micro1",
    icon: micro1,
    iconBg: "#383E56",
    date: "February 2024 - April 2024",
    points: [
      "Engineered AI data pipelines and validation workflows that increased model accuracy by 15–20%.",
      "Designed structured data-cleaning frameworks, reducing annotation errors by 35%.",
      "Documented processes and workflows to improve collaboration and development efficiency across teams.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prana",
    icon: prana,
    iconBg: "#E6DEDD",
    date: "May 2024 - October 2024",
    points: [
      "Led full-stack feature development using Java, Spring Boot, and React, accelerating delivery cycles by 40%.",
      "Identified and resolved backend bottlenecks by optimizing database queries, improving load times by 35%.",
      "Enhanced application stability by reducing production errors by 28% in client-facing systems.",
      "Collaborated with remote teams in an agile setup to deliver high-quality, scalable solutions.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Cyber Infrastructure",
    icon: cis,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Contributed across all phases of the SDLC while building enterprise-grade backend systems using Java and Spring Boot.",
      "Designed and developed RESTful microservices that improved system response times by 25–30%.",
      "Implemented XML/XSD validation and digital signature workflows, achieving 99% processing accuracy.",
      "Deployed modular Spring Boot services that reduced inter-service latency by 22% and improved overall reliability.",
      "Worked closely with cross-functional teams to enforce clean architecture and reduce defect rates by 18%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "For successfully delivering and going live with the client's AEPS, Aadhar AEPS, and BBPS Prod issue as a part of the 3.9.0 release to the project.",
    name: "Bravo",
    designation: "",
    company: "Persistent Systems",
    image: persistent,
  },
  {
    testimonial:
      "Awarded Star Performer in New Services for ownership, timely delivery, and high-impact contributions to reliable enterprise backend production systems.",
    name: "Star Performer",
    designation: "",
    company: "Cyber Infrastructure",
    image: cis,
  },
  {
    testimonial:
      "Secured the top position in a challenging competition where we orchestrated a thriving business within three days, turning our investments into substantial profits",
    name: "One Dollor Venture",
    designation: "",
    company: "CIED - E-Cell",
    image: cied,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Welcome to my portfolio website, where I showcase my expertise in Java, Spring Boot, and React.js. Dive into my diverse projects and journey through different domains",
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
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movix",
    description:
      "Introducing Movix, your gateway to the world of cinema. Explore the latest trends, upcoming releases, and top-rated movies and TV shows with ease. Dive into the world of entertainment like never before",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "tmdb",
        color: "orange-text-gradient",
      },
    ],
    image: movix,
    source_code_link: "https://github.com/AdityaDubey8602/Movix",
  },

  {
    name: "Old Portfolio",
    description:
      "I've crafted this portfolio using React.js to present a comprehensive view of my college internships. Explore my journey and experiences!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: oldPortfolio,
    source_code_link: "https://github.com/AdityaDubey8602/MyWebsite",
  },
];

export { services, technologies, experiences, testimonials, projects };
