import React from 'react'
import PropTypes from 'prop-types'
import Header from './header.jsx'
import Job from './section/job.jsx'
import Diploma from './section/Diploma.js'

import css from '../static/img/css.png'
import sass from '../static/img/sass.png'
import html from '../static/img/html.png'
import js from '../static/img/js.png'
import node from '../static/img/node.png'
import react from '../static/img/react.png'
import redux from '../static/img/redux.png'
import clojure from '../static/img/clojure.png'
import htmx from '../static/img/htmx.png'
import git from '../static/img/git.png'

import '/src/scss/resume.scss'
import '/src/scss/diploma.scss'
import '/src/scss/hobbies.scss'

const { string, array } = PropTypes,
  getJobs = ({ jobs }) => jobs.map((j, i) => <Job key={i} {...j} />),
  Resume = function(props) {
    let { hobbies } = props

    return (
      <div className="resume">
        <Header {...props} />
        <div className="main">
          <section className="jobs">{getJobs(props)}</section>
          <section className="skill-logos">
            <h3>I Have experience with&hellip;</h3>
            {[html, css, js, node, sass, react, redux, clojure, git, htmx].map(
              (img, i) => (
                <img key={i} src={img} />
              )
            )}
          </section>
          <section className="hobbies-wrapper">
            <ul className="hobbies">
              {hobbies.map((h, k) => (
                <li key={k}>{h}</li>
              ))}
            </ul>
          </section>
          <section className="diploma-wrapper">
            <Diploma {...props} />
          </section>
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
