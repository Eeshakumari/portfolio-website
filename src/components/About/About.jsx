import React from "react";
import MainBody from "../MainBody/MainBody";
import Tabs from "../CustomComponents/Tabs/Tabs";
import { allProjects } from "../../utils/Projects";

import "./About.scss";
import { useGlobalContext } from "../../store/store";

const About = () => {
  const { selectedHobby } = useGlobalContext();
  return (
    <MainBody>
      <div className="projects__main__container">
        <div className="hobbies__title">Hobbies</div>
        <Tabs
          menu={["travel", "books"]}
          defaultSelected={selectedHobby}
          mapValue={allProjects}
        />
      </div>
    </MainBody>
  );
};

export default About;
