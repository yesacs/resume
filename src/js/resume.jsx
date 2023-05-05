import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Header from './header.jsx'
import Job from './section/job.jsx'

import css from '../static/img/css.png'
import sass from '../static/img/sass.png'
import html from '../static/img/html.png'
import js from '../static/img/js.png'
import node from '../static/img/node.png'
import react from '../static/img/react.png'
import redux from '../static/img/redux.png'
import clojure from '../static/img/clojure.png'
import htmx from '../static/img/htmx.png'

import '/src/scss/app.scss'

const { string, array } = PropTypes,
  getJobs = ({ jobs }) => jobs.map((j, i) => <Job key={i} {...j} />),
  Resume = function(props) {
    let { education } = props

    return (
      <div className="resume">
        <Header {...props} />
        <div className="main">
          <section className="jobs">{getJobs(props)}</section>
          <section className="skill-logos">
            {[html, css, js, node, sass, react, redux, clojure, htmx].map(i => (
              <img key={i} src={i} />
            ))}
          </section>

          <div className="diploma">
            <div className="diploma-frame">
              <div className="diploma-mat">
                <div className="diploma-paper">
                  <i className="fa-solid fa-award" />
                  <div>
                    <div className="degree">{education.degree}</div>
                    <div>{education.school}</div>
                    <div>
                      {education.location.city}, {education.location.state}
                    </div>
                    <div>
                      {education.duration.start} &mdash;{' '}
                      {education.duration.end}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

Resume.propTypes = {
  footer: string,
  repoUrl: string,
  jobs: array,
  skills: array,
  offline: string,
}

export default Resume
