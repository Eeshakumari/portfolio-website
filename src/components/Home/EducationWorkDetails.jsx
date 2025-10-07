import React from "react";

const EducationWorkDetails = React.memo(
  ({ duration, title, course, location, specialization, techUsed, from }) => {
    const getSpecilization = (techUsed) => {
      const data = specialization.split(":");
      return (
        <div>
          <p>{data[0]}</p>
          <p className="home__education__specialization">{data[1]}</p>
          <div className="experience__specialization__details">
            {techUsed.map((details) => (
              <p key={details}>
                <span>🔘️</span>
                {details}
              </p>
            ))}
          </div>
        </div>
      );
    };
    return (
      <div className="home__education__content">
        <div className="home__education__subtitle">{duration}</div>
        <h5 className="home__education__heading">{title}</h5>
        <div className="home__education__subtitle__gray">
          {from === "edu" ? `${course}, ${location}` : location}
        </div>
        {from === "edu" ? specialization && (
          <p className="home__education__specialization">{specialization}</p>
        ) : (
          getSpecilization(techUsed)
        )}
      </div>
    );
  }
);

export default EducationWorkDetails;
