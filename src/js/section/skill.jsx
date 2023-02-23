import React from 'react'
import PropTypes from 'prop-types'
import Section from './section.jsx'

const
  { string, array } = PropTypes,
  getContent = ({ subSkills }) => (
    <ul>
      {subSkills.map((ss, i) => <li key={i} className="col-sm-4 col-xs-6">{ss}</li>)}
    </ul>
  ),
  getGutter = ({ title }) =>
    <div>{title}</div>,
  Skill = function (props) {
    return (
      <Section
        gutter={getGutter(props)}
        content={getContent(props)}
        className="skill"
      />
    )
  }

Skill.propTypes = {
  title: string,
  subSkills: array
}

export default Skill
