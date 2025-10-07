import React from "react";
import MainBody from "../MainBody/MainBody";
import "./Projects.scss";
import Tabs from "../CustomComponents/Tabs/Tabs";

import { allProjects } from "../../utils/Projects";
import { useGlobalContext } from "../../store/store";
const Projects = () => {
  const { selectedProject } = useGlobalContext();

  return (
    <MainBody>
      <div className="projects__main__container">
        <div className="projects__title">Projects</div>
        <Tabs
          menu={["all", "frontend", "backend", "mobile apps", "UI/UX Design"]}
          defaultSelected={selectedProject}
          mapValue={allProjects}
          from="projects_page"
        />
      </div>
    </MainBody>
  );
};

export default Projects;
