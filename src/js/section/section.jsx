'use strict'
import React, { PropTypes } from 'react'

const
  { string, node } = PropTypes,
  Section = function ({ className, gutter, content }) {
    return (
      <section className={'row ' + className}>
        <div className="gutter col-sm-3">{gutter}</div>
        <div className="content col-sm-9">
          {content}
        </div>
      </section>
    )
  }
Section.propTypes = {
  className: string,
  gutter: node,
  content: node
}

export default Section
