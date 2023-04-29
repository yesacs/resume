import React from 'react'
import PropTypes from 'prop-types'

const { string, any } = PropTypes,
  getDuties = ({ duties = [] }) => duties.map((d, i) => <li key={i}>{d}</li>),
  getLinks = ({ links = [] }) =>
    links.map((l, i) => (
      <li key={i}>
        <a href={l.url}>{l.label}</a>
      </li>
    )),
  JobContent = props => {
    const {
      title,
      company,
      location = {},
      duration = {},
      links = [],
      description,
      logo,
      tools = [],
    } = props

    return (
      <div>
        <div className="job-content">
          <img className="job-logo" src={logo} />
          <h3 className="heading">
            {title} @ {company}
          </h3>
          <p className="company">
            {location.city}, {location.state}
            {duration.start} &mdash; {duration.end || 'Present'}
          </p>
          <div className="job-details">
            <p className="job-description">
              {description}

              <ul className="duties">{getDuties(props)}</ul>
              {links.length > 0 && (
                <div className="links">
                  <ul>{getLinks(props)}</ul>
                </div>
              )}
            </p>
            <div className="job-tools">
              <ul>
                {tools.map(t => (
                  <li>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  Job = function (props) {
    return (
      <section className={'job ' + props.class}>
        <JobContent {...props} />
      </section>
    )
  }

JobContent.propTypes = {
  title: string,
  company: string,
  location: string,
  timeAtPosition: string,
  logo: any,
  tools: any,
}

export default Job
