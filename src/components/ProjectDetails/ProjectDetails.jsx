import React, { useEffect, useState } from "react";

import "./ProjectDetails.scss";

import MainBody from "../MainBody/MainBody";
import { useNavigate, useParams } from "react-router-dom";
import { allProjects } from "../../utils/Projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [techUsed, setTechUsed] = useState([]);

  useEffect(() => {
    const selectedProject = allProjects.filter(project => project.id === id)[0];
    setProject(selectedProject);
    setTechUsed(selectedProject.tech);
    return () => {};
  }, []);

  return (
    <MainBody>
      <div className="projects__details__main__container">
        <div className="projects__details__content__wrapper">
          <div
            className="project__details__back__button"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <img
            srcSet={`${project.imageUrl} 500w`}
            src={project.imageUrl}
            alt={project.id}
            loading="lazy"
            sizes="(max-width: 479px) 80vw, (max-width: 767px) 87vw, (max-width: 991px) 51vw, 540px"
            className="project__template__banner_image"
          />
          <div className="project__template__content__wrapper">
            <div className="project__template__content">
              <h3 className="project__title">{project.title}</h3>
              <span className="project__template__category">
                {project.category}
              </span>
              <p className="project__details">{project.description}</p>
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  className="button website__button"
                >
                  Website
                </a>
              )}
              {project.gitLink && (
                <a
                  href={project.gitLink}
                  target="_blank"
                  className="button github__button"
                >
                  Github
                </a>
              )}
            </div>
            <div className="project__template__info">
              <div className="project__template__info__wrap">
                <p className="subtitle__projects">Type</p>
                <p className="paragraph__gray">{project.client}</p>
              </div>
              <div className="project__template__info__wrap">
                <p className="subtitle__projects">Duration</p>
                <p className="paragraph__gray">{project.duration}</p>
              </div>
              <div className="project__template__info__wrap">
                <p className="subtitle__projects">Packages used</p>
                <div className="tech__wrapper">
                  {project.packages?.map(item => (
                    <p
                      key={item + project.id}
                      className="paragraph__gray not__captialize"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {techUsed && (
            <>
              <div className="project__page__divider" />
              <div>
                <h2 className="subtitle__projects__tech">Tech</h2>
                <div className="project__page__skills__wrapper">
                  {techUsed?.map(tech => (
                    <div
                      key={tech.name + tech.icon}
                      className="project__page__tech__item"
                    >
                      <img
                        src={tech.icon}
                        className={`home__page__skills__imgage__item ${
                          tech.name === "Flutter/Dart" ||
                          tech.name === "Material UI"
                            ? "special__width"
                            : ""
                        }`}
                        alt={tech.name}
                      />
                      <div className="home__page__tech__name">{tech.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </MainBody>
  );
};

export default ProjectDetails;
