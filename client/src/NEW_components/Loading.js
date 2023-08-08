import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <>
      <div className="outerpage">
        <div className="spinner">
          <div className="spinner-sector spinner-sector-blue"></div>
          <div className="spinner-sector spinner-sector-black"></div>
          <div className="spinner-sector spinner-sector-white"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
