import React from "react";

import "./ImageContainer.scss";

import myImage from "../../assets/images/profilePhoto.jpeg";
import TypeWriterEffect from "./TypeWriterEffect";
import { externalLinks } from "../../utils/ExpereinceEducation";

const ImageContainer = () => {
  return (
    <div className="main__person__image skeleton">
      <div style={{ width: "460px" }} />
      <img src={myImage} alt="myImage" />
      <div className="my__info">
        <h2 className="my__info__name">Eesha Kumari Reddy</h2>
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
    </div>
  );
};

export default ImageContainer;
