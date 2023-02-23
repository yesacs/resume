import React from 'react'
import PropTypes from 'prop-types'

const
  { string } = PropTypes,
  SectionHeader = function ({ title }) {
    return (
      <header className="row section-header">
        <div className="content col-sm-9 col-sm-offset-3">
          <h2>{title}</h2>
        </div>
      </header>
    )
  }

SectionHeader.propTypes = {
  title: string
}

export default SectionHeader
