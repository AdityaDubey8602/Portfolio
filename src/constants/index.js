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
    title: "React.JS",
    icon: web,
  },
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
    name: "Java",
    icon: java,
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
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "MySQl",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#383E56",
    date: "January 2022 - June 2022",
    points: [
      "Learned backend technologies including Java, Spring Framework, and database tools from industry experts.",
      "Received training in these technologies and successfully passed internal tests with a score of over 80%.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#E6DEDD",
    date: "June 2022 - March 2023",
    points: [
      "Worked on eHub, a web application managing entities,hierarchies, and users of payment systems.",
      "Integrated Prepaid Payment Instrument (PPI) module, focusing on card management, funds load, and customer registration.",
      "Fixed defects identified during testing, and developed Restfulservice controllers, application service classes, and repositories.",
      "Utilized Java 8, Spring Boot, Restful web services, Hibernate,IntelliJ Idea, PostgreSQL, Tomcat, Git, and Gradle.",
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "Persistent Systems",
    icon: persistent,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Created an application for Project Managers, Delivery Partners, and Delivery Heads at Persistent Systems.",
      "Provided project information, including team size, weekly report due dates, and project health.",
      "Implemented Login module with Single Sign-On, Dashboard, and master table creation in the database.",
      "Collaborated with a team of five as a Fullstack developer.",
      "Employed Java 8, Spring Boot, Hibernate, HTML, CSS,JavaScript, React JS, IntelliJ Idea, VS Code, PostgreSQL, Git, and Gradle.",
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
      "Secured the top position in a challenging competition where we orchestrated a thriving business within three days, turning our investments into substantial profits",
    name: "One Dollor Venture",
    designation: "",
    company: "CIED - E-Cell",
    image: cied,
  },
  {
    testimonial:
      "Secured the coveted first position at the Indore Nodal Inter College Fine Art Competition, a testament to my artistic prowess and creativity.",
    name: "College Fine Art Competition",
    designation: "",
    company: "SKITM",
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
