import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useDetectKeyboardOpen from "../hooks/useKeyBoardHook";

import DownloadIcon from "../../assets/icons/resume-download.svg";

import Resume from "../../assets/EeshaResume.pdf";

import "./NavBar.scss";
const NavBar = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [isKeyboardOpen] = useDetectKeyboardOpen();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <nav className="nav__bar">
      <div
        className="nav__container"
        style={{ display: width < 767 && isKeyboardOpen ? "none" : "inherit" }}
      >
        <div className="nav__logo">E</div>
        <div className="empty_container" />
        <div className="app__bar">
          <div>
            <NavLink
              aria-label="Home"
              to="/"
              end
              className={({ isActive }) =>
                `icons__container ${isActive ? "active" : ""}`
              }
            >
              <i className="icons fa-solid fa-house icons"></i>

              <p>Home</p>
            </NavLink>

            <NavLink
              aria-label="Projects"
              to="/projects"
              className={({ isActive }) =>
                `icons__container ${isActive ? "active" : ""}`
              }
            >
              <i className="icons fa-solid fa-briefcase"></i>

              <p>Projects</p>
            </NavLink>
            <NavLink
              aria-label="Contact"
              to="/contact"
              className={({ isActive }) =>
                `icons__container ${isActive ? "active" : ""}`
              }
            >
              <i className="icons fa-regular fa-comment"></i>

              <p>Contact</p>
            </NavLink>
            <NavLink
              aria-label="Hobbies"
              to="/hobbies"
              className={({ isActive }) =>
                `icons__container ${isActive ? "active" : ""}`
              }
            >
              <i className="icons fa-regular fa-address-card"></i>

              <p>Hobbies</p>
            </NavLink>
          </div>
        </div>
        <div className="download__container">
          <a
            className="icons__container"
            aria-label="download resume"
            href={Resume}
            download="EeshaKumariReddy "
          >
            <img src={DownloadIcon} alt="resume" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
