import React from 'react'
import PropTypes from 'prop-types'

let Diploma = ({ education }) => (
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
              {education.duration.start} &mdash; {education.duration.end}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Diploma.propTypes = {
  education: PropTypes.any,
}

export default Diploma
