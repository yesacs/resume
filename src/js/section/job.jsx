import React from "react";
import PropTypes from "prop-types";
import Section from "./section.jsx";

const { string } = PropTypes,
  getDuties = ({ duties = [] }) => duties.map((d, i) => <li key={i}>{d}</li>),
  getLinks = ({ links = [] }) =>
    links.map((l, i) => (
      <li key={i}>
        <a href={l.url}>{l.label}</a>
      </li>
    )),
  JobContent = (props) => {
    const {
      title,
      company,
      location = {},
      duration = {},
      links = [],
      description,
    } = props;

    return (
      <div>
        <div className="job-content">
          <h3 className="heading">{company}</h3>
          <p className="company">
            {location.city}, {location.state}
            {duration.start} &mdash; {duration.end || "Present"}
          </p>
          <p>{description}</p>
          <ul className="duties">{getDuties(props)}</ul>
          {links.length > 0 && (
            <div className="links">
              <ul>{getLinks(props)}</ul>
            </div>
          )}
        </div>
      </div>
    );
  },
  Gutter = ({ gutterClassName }) => (
    <div className={"logo " + (gutterClassName || null)}></div>
  ),
  Job = function (props) {
    const content = <JobContent {...props} />,
      gutter = <Gutter {...props} />;

    return (
      <Section
        className={"job " + props.class}
        gutter={gutter}
        content={content}
      />
    );
  };

JobContent.propTypes = {
  title: string,
  company: string,
  location: string,
  timeAtPosition: string,
};

Gutter.propTypes = {
  gutterClassName: string,
};

export default Job;
