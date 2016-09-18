'use strict'
import React from 'react'

const
  SectionHeader = function ({ title }){
    return (
      <header className="row section-header">
        <div className="content col-sm-9 col-sm-offset-3">
          <h2>{title}</h2>
        </div>
      </header>
    )
  }

SectionHeader.propTypes = {
  title: React.PropTypes.string
}

export default SectionHeader
