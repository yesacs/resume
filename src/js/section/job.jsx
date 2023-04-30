import React from 'react'
import PropTypes from 'prop-types'

const { string, any } = PropTypes,
  getDuties = ({ duties = [] }) => duties.map((d, i) => <li key={i}>{d}</li>),
  getLinks = ({ links = [] }) =>
    links.map((l, i) => (
      <li key={i} className="external-link">
        <a href={l.url}>
          {l.label}
          <i className="fa-sharp fa-solid fa-up-right-from-square" />
        </a>
      </li>
    )),
  JobContent = props => {
    const {
      title,
      company,
      duration = {},
      links = [],
      description,
      logo,
      tools = [],
    } = props

    return (
      <div>
        <div className="job-content">
          <div className="job-details">
            <div className="job-description">
              <h3>
                {title} @ {company}
                <small>
                  {duration.start} &mdash; {duration.end || 'Present'}
                </small>
              </h3>
              <p>{description}</p>
              <ul className="duties">{getDuties(props)}</ul>
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
