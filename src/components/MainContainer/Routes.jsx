import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../Home/Home"));
const Contact = lazy(() => import("../Contact/Contact"));
const About = lazy(() => import("../About/About"));
const Projects = lazy(() => import("../Projects/Projects"));
const ProjectDetails = lazy(() => import("../ProjectDetails/ProjectDetails"));

import "../MainBody/MainBody.scss";
import ApiLoader from "../Loader/ApiLoader";

const AnimatedRoutes = () => {
  return (
    <Suspense fallback={<ApiLoader />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hobbies" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default AnimatedRoutes;
