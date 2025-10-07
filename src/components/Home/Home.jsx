import React, { useCallback, useEffect, useState } from "react";

import MainBody from "../MainBody/MainBody";
import "./Home.scss";

import { DateFrom } from "../../utils/DateFrom";
import {
  educationDet,
  experienceDet,
  externalLinks,
  skills,
} from "../../utils/ExpereinceEducation";

import myImage from "../../assets/images/profilePhoto.jpeg";
import Skills from "../../assets/icons/skills-logo.svg";
import Education from "../../assets/icons/education.svg";
import Experience from "../../assets/icons/experience.svg";
import EducationWorkDetails from "./EducationWorkDetails";
import Skill from "./Skill";
import { techStack } from "../../utils/Tech-stack";
import TypeWriterEffect from "../ImageContainer/TypeWriterEffect";

const Home = () => {
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState("");

  const [educationDetails, setEducationDetails] = useState([]);
  const [experienceDetails, setExperienceDetails] = useState([]);
  const [skillsDetails, setSkillsDetails] = useState([]);
  const [techStackState, setTechStack] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const calculateAge = () => {
    var age = DateFrom("04/15/1999");
    setAge(age.years);
  };

  const calculateExperience = useCallback(
    (started, name) => {
      var exp = DateFrom(started);
      if (name === "tech") {
        return exp.months === 0
          ? `${exp.years} ${exp.years === 1 ? "year" : "years"}`
          : `${exp.years}.${exp.months} ${
              exp.years === 0 && exp.months !== 0 ? "year" : "years"
            }`;
      }
      return exp.months === 0 ? exp.years : `${exp.years}.${exp.months}`;
    },
    [techStackState]
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  useEffect(() => {
    calculateAge();
    setExperience(calculateExperience("06/15/2021"));
    setEducationDetails(educationDet);
    setExperienceDetails(experienceDet);
    setSkillsDetails(skills);
    setTechStack(techStack);
  }, []);

  return (
    <MainBody>
      <div className="home__main__container">
        {width < 1280 ? (
          <div className="home__page__image__container">
            <img src={myImage} alt="myImage" />
            <h1 className="page__header">Eesha Kumari Reddy</h1>
            <TypeWriterEffect />
            <div className="my__info__socials">
              <a
                href={externalLinks.linkedin}
                alt="LKDN"
                target="_blank"
                aria-label="Linkdin"
              >
                <i className="fa-brands link__icons fa-linkedin-in"></i>
              </a>
              <a
                href={externalLinks.github}
                alt="Git"
                target="_blank"
                aria-label="Github"
              >
                <i className="fa-brands link__icons fa-github"></i>
              </a>
              {/* <a href="https://www.facebook.com" alt="fbb" target="_blank">
            F
          </a> */}
            </div>
          </div>
        ) : (
          <h1 className="page__header">About me</h1>
        )}

        <div className="basic__information__wrapper">
          <div className="basic__information">{age} years</div>
          <div className="basic__information__divider">/</div>
          <div className="basic__information">USA</div>
          {width > 991 && (
            <>
              <div className="basic__information__divider">/</div>
              <div className="basic__information">Developer</div>
            </>
          )}
        </div>
        <p className="basic__main__info">
          Hi! I'm a Frontend developer with{" "}
          <b className="basic__main__experience">{experience}</b> years of
          expertise in React, TypeScript, JavaScript, HTML/CSS and modern
          tooling. I build scalable, maintainable single-page applications and
          reusable component libraries, integrate REST/GraphQL APIs and
          real-time data, and ensure quality through automated tests and
          accessibility (WCAG) audits. I'm committed to clean code, continuous
          learning, and delivering polished user experiences for finance and
          healthcare domains.
        </p>
        <div className="home__page__divider" />
        <div className="home__skills__wrapper">
          <img
            src={Skills}
            alt="skills"
            className="home__skills__title__icon"
          />
          <h3 className="home__skills__title">Skills</h3>
        </div>
        <div className="home__progress__bar__wrapper">
          <div className="home__progress__bar">
            {skillsDetails.map(item => (
              <Skill
                key={item.title + item.level}
                title={item.title}
                level={item.level}
              />
            ))}
          </div>
        </div>
        <div className="home__page__divider" />
        <div className="home__work__education__wrapper">
          <div className="work__edu__container">
            <div className="home__work__Edu__title">
              <img
                src={Education}
                alt="education"
                className="home__work__title__icon"
              />
              <h4 className="home__section__subtitle">Education</h4>
            </div>
            {educationDetails.map((item, i) => (
              <EducationWorkDetails
                key={item.duration}
                duration={item.duration}
                title={item.schoolName}
                course={item.course}
                location={item.location}
                specialization={item.specialization}
                from="edu"
              />
            ))}
          </div>
          <div className="work__edu__container">
            <div className="home__work__Edu__title">
              <img
                src={Experience}
                alt="experience"
                className="home__work__title__icon"
              />
              <h4 className="home__section__subtitle">Experience</h4>
            </div>
            {experienceDetails.map((item, i) => (
              <EducationWorkDetails
                key={item.specialization}
                duration={item.duration}
                title={item.schoolName}
                course={item.course}
                location={item.location}
                specialization={item.specialization}
                techUsed={item.techUsed}
                from="exp"
              />
            ))}
          </div>
        </div>
        <div className="home__page__divider" />
        <div className="home__page__skills__wrapper">
          {techStackState.map(tech => (
            <div
              key={tech.techName + tech.icon}
              className="home__page__tech__item"
            >
              <img
                src={tech.icon}
                className={`home__page__skills__imgage__item ${
                  tech.techName === "Flutter/Dart" ||
                  tech.techName === "Material UI"
                    ? "special__width"
                    : ""
                }`}
                alt={tech.techName}
              />
              <div className="home__page__tech__name">
                {tech.techName}
                <br />
                {`${calculateExperience(tech.experience, "tech")}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainBody>
  );
};

export default Home;
