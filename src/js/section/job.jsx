import React from 'react'
import PropTypes from 'prop-types'

import '/src/scss/job.scss'

const { string, any, bool } = PropTypes,
  getLinks = ({ links = [] }) =>
    links.map((l, i) => (
      <li key={i} className="external-link">
        <a href={l.url}>{l.label}</a>
      </li>
    )),
  JobContent = props => {
    const {
      title,
      company,
      duration = {},
      description,
      logo,
      tools = [],
      current,
    } = props

    return (
      <div className="job-content">
        <div className="job-details">
          <div className="job-description">
            <h3>
              <span>{title}</span>
              <span>@ {company}</span>
              <small>
                {duration.start} &mdash; {duration.end || 'Present'}
              </small>
            </h3>
            <div>{description}</div>
          </div>
          <div className="job-tools">
            <img className="job-logo" src={logo} />
            <ul>
              {tools.map(t => (
                <li>{t}</li>
              ))}
              {getLinks(props)}
            </ul>
          </div>
        </div>

        {current && <div className="ribbon">I work here!</div>}
      </div>
    )
  },
  Job = function(props) {
    return (
      <section className={'job job-' + props.class}>
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
  current: bool,
}

export default Job
