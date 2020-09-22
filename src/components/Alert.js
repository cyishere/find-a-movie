import React from "react";

const Alert = ({ show, status, msg }) => {
  return <>{show && <div className={`alert ${status}`}>{msg}</div>}</>;
};

export default Alert;
