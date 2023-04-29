import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Section from "./section/section.jsx";
import Job from "./section/job.jsx";
import Skill from "./section/skill.jsx";

const { string, array } = PropTypes,
  getJobs = ({ jobs }) => jobs.map((j, i) => <Job key={i} {...j} />),
  getSkills = ({ skills }) => skills.map((s, i) => <Skill key={i} {...s} />),
  Resume = function (props) {
    let [activeTab, setActiveTab] = useState("experience");

    return (
      <span>
        <Header {...props} />

        <div>{getJobs(props)}</div>
        <div>{getSkills(props)}</div>
        <div>
          <Section
            content={<p className="offline p-block">{props.offline}</p>}
          />
        </div>
        <Footer content={props.footer} repoUrl={props.repoUrl} />
      </span>
    );
  };

Resume.propTypes = {
  footer: string,
  repoUrl: string,
  jobs: array,
  skills: array,
  offline: string,
};

export default Resume;
