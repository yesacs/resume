'use strict'
import React, { PropTypes } from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Section from './section/section.jsx'
import SectionHeader from './section/sectionHeader.jsx'
import Job from './section/job.jsx'
import Skill from './section/skill.jsx'

const
  { string, array } = PropTypes,
  getJobs = ({ jobs }) =>
    jobs.map((j, i) => <Job key={i} {...j} />),
  getSkills = ({ skills }) =>
    skills.map((s, i) => <Skill key={i} {...s} />),
  Resume = function (props) {
    return (
      <span>
        <Header {...props} />
        {getJobs(props)}
        <SectionHeader title="Skills" />
        {getSkills(props)}
        <SectionHeader title="Offline" />
        <Section content={
          <p className="offline p-block">{props.offline}</p>
        } />
        <Footer content={props.footer} repoUrl={props.repoUrl} />
      </span>
    )
  }

Resume.propTypes = {
  footer: string,
  repoUrl: string,
  jobs: array,
  skills: array,
  offline: string
}

export default Resume
