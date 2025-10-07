import { useEffect, useState } from "react";

const Skill = ({ title, level }) => {
  return (
    <div className="home__progress__bar__item">
      <div className="home__progress__bar__title">{title}</div>
      <div className="home__progress__bar__number">{level}%</div>
      <div className="progress__bar__wrapper">
        <div className="progress__bar__gray__line"></div>
        <div
          style={{ width: `${(level / 100).toFixed(1) * 100}%` }}
          className={`progress__bar__${(level / 100).toFixed(1) * 100}`}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
