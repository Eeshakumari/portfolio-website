import Html from "../assets/icons/html.svg";
import Css from "../assets/icons/css.svg";
import ReactIcon from "../assets/icons/react.svg";
import Flutter from "../assets/icons/flutter.svg";
import Node from "../assets/icons/node.svg";
import Express from "../assets/icons/expressjs.png";
import MongoDB from "../assets/icons/mongoDB.svg";
import JavaScript from "../assets/icons/js.svg";

export const allProjects = [
  // UI/UX Design
  {
    id: "1",
    title: "Just Bake - Local Bakery App",
    category: "UI/UX Design",
    client: "learning/practice",
    duration: "May, 2023",
    websiteLink:
      "https://www.behance.net/gallery/236100751/Just-Bake-A-Local-Bakery-App#/",
    srcImageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1759857026/eesha/justBake_jwgxa1.jpg",
    imageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1759857026/eesha/justBake_jwgxa1.jpg",
    packages: ["Figma"],
    description: `Just Bake, a beloved local bakery, is embarking on an exciting journey aims to create a seamless, convenient, and delightful mobile experience, allowing users to explore, order, and savor their favorite treats with ease`,
  },

  {
    id: "9",
    title: "GoTrip: Customizing and Planning a trip effectively",
    category: "UI/UX Design",
    client: "learning/practice",
    duration: "May, 2021",
    websiteLink:
      "https://www.behance.net/gallery/236103437/GoTrip-Customizing-and-Planning-a-trip-effectively#",
    srcImageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1759857034/eesha/goTrip_xlx3ng.jpg",
    imageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1759857034/eesha/goTrip_xlx3ng.jpg",
    packages: ["Figma"],

    description: `A trip planning app is required to customize and plan the trip effectively. Most people will feel that trip planning is difficult because they need to have clear information about many things like dates, budget, choosing places, etc., but with an app, you can easily get started.`,
  },

  // frontend
  {
    id: "3",
    title: "TrailerFlix",
    category: "frontend",
    gitLink: "https://github.com/Eeshakumari/trailerflix",
    client: "learning/practice",
    duration: "Dec, 2020",
    websiteLink: "https://trailerflix-app.web.app/",
    srcImageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1694602550/smallImages/TrailerFlix-small_pyutfq.png",
    imageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1686378926/Projects/TrailerFlix_nvkf1n.png",
    packages: [
      "React",
      "movie-traile",
      "prop-types",
      "react-fontawesome",
      "firebase",
      "react-youtube",
    ],
    tech: [
      { name: "HTML5", icon: Html },
      { name: "CSS3", icon: Css },
      { name: "JavaScript", icon: JavaScript },
      { name: "React", icon: ReactIcon },
    ],
    description: `A captivating website developed using React that brings you the latest movie details and allows you to watch trailers of specific movies. 
    With a sleek and user-friendly interface, TrailerFlix showcases my skills in front-end web development and my ability to integrate APIs to fetch movie data which 
    enabling users to explore movie details and enjoy trailers effortlessly. 
    TrailerFlix is a testament to my passion for creating visually appealing and informative websites that enhance the movie-watching experience.`,
  },

  // backend
  {
    id: "10",
    title: "jobs api",
    category: "backend",
    gitLink: "https://github.com/Eeshakumari/jobs-api",
    client: "learning/practice",
    duration: "Mar, 2023",
    websiteLink: "https://jobs-api-rbf4.onrender.com/api-docs/",
    srcImageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1694602552/smallImages/Jobs-api-small_x8egzt.png",
    imageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1686396492/Projects/Jobs-api_xa4yd3.png",
    packages: [
      "bcryptjs",
      "dotenv",
      "express-rate-limit",
      "cors",
      "express-async-handler",
      "jsonwebtoken",
      "mongoose",
    ],
    tech: [
      { name: "Node.js", icon: Node },
      { name: "Express", icon: Express },
      { name: "MongoDB", icon: MongoDB },
    ],
    description: `A comprehensive API that facilitates job applications and job posting functionalities for users and companies respectively.
    Built using technologies like Node.js and Express, the Jobs API offers endpoints for users to apply for job openings and for companies to add new job listings. 
    User authentication ensures secure access to application and posting features.
    The API allows users to browse available job openings, submit their application materials, and track the status of their applications. On the other hand, companies can add new job listings, review applications, and manage the hiring process.
    `,
  },

  // mobile apps
  {
    id: "12",
    title: "Food Delivery App",
    category: "mobile apps",
    gitLink: "https://github.com/Eeshakumari/food_delivery_app",
    client: "learning/practice",
    duration: "Apr, 2023",
    websiteLink: "",
    srcImageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1694602550/smallImages/food-app-1-small_tit211.png",
    imageUrl:
      "https://res.cloudinary.com/dj2gmcaqv/image/upload/v1686397259/Projects/food-app-1_lpngix.png",
    packages: [
      "cupertino_icons",
      "dots_indicator",
      "get",
      "persistent_bottom_nav_bar",
    ],
    tech: [{ name: "Flutter", icon: Flutter }],
    description: `A delightful food delivery app built using the Flutter framework, showcasing my expertise in mobile app development. 
    This app offers a seamless user experience, allowing customers to browse a variety of restaurants, explore menus, place orders, and track delivery status.
    The app incorporates Flutter's rich widget library to create a visually appealing and responsive interface.
    I prioritized performance optimization and intuitive navigation within the app, enabling users to effortlessly browse restaurants, customize orders, and provide feedback through ratings and reviews
    `,
  },
];
