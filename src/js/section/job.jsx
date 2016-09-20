import React, { PropTypes } from 'react'
import Section from './section.jsx'

const
  { string , arrayOf, node, shape } = PropTypes,
  getDuties = ({ duties }) => duties.map((d,i) =>
    <li key={i}>{d}</li>
  ),
  getLinks = ({ links }) => links.map((l,i) =>
    <li key={i}>
      <a href={l.url}>{l.label}</a>
    </li>
  ),
  JobContent = props => {
    const { title, company, location, timeAtPosition } = props

    return (
      <div>
        <div className="job-content">
          <h3 className="heading">{title}</h3>
          <p className="company">{company}|{location}|{timeAtPosition}</p>
          <ul className="duties">{getDuties(props)}</ul>
          <div className="links">
              <h4>Links of Interest</h4>
              <ul>{getLinks(props)}</ul>
          </div>
        </div>
      </div>
    )
  },
  Gutter = ({ gutterClassName }) => <div className={'logo ' + (gutterClassName || null)}></div>,
  Job = function (props) {
    const 
      content = <JobContent {...props} />,
      gutter = <Gutter {...props} />

    return <Section className={'job ' + props.class} gutter={gutter} content={content} />
  }

Job.propTypes = {
  title:          string,
  class:          string,
  company:        string,
  location:       string,
  timeAtPosition: string,
  gutterClassName: string,
  duties:         arrayOf(node),
  links:          arrayOf(shape({
    url:        string,
    label:      string
  })),
}

JobContent.propTypes = {
  title:          string,
  company:        string,
  location:       string,
  timeAtPosition: string,
}

Gutter.propTypes = {
  gutterClassName: string,
}

export default Job
