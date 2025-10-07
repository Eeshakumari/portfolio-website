import React from "react";
import "./MainBody.scss";

const MainBody = (props) => {
  const { children } = props;

  return (
    <div id="main__body" className="main__body">
      {children}
    </div>
  );
};

export default MainBody;
