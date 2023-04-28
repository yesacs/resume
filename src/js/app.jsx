import React from "react";
import ReactDOM from "react-dom";
import Resume from "./resume.jsx";
import ResumeData from "../resumeData.js";

ReactDOM.render(
  <Resume {...ResumeData} />,
  window.document.querySelector("#resume"),
  () => {}
);
