import React from 'react'
import PropTypes from 'prop-types'

let Diploma = ({ education }) => (
  <div className="diploma">
    <div className="diploma-frame">
      <div className="diploma-mat">
        <div className="diploma-paper">
          <i className="fa-solid fa-award" />
          <div>
            <h3 className="degree">
              <span>{education.degree}</span>
              <span className="print-only">@ {education.school}</span>
              <small className="print-only">
                {education.duration.start} &mdash; {education.duration.end}
              </small>
            </h3>
            <div className="screen-only">{education.school}</div>
            <div>
              {education.location.city}, {education.location.state}
            </div>
            <div className="screen-only">
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
