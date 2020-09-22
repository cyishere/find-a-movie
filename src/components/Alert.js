import React from "react";

const Alert = ({ show, status }) => {
  return (
    <>{show && <div className={`alert ${status}`}>alert message...</div>}</>
  );
};

export default Alert;
