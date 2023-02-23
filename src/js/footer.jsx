import React from 'react'
import PropTypes from 'prop-types'

const
  { string } = PropTypes,
  Footer = function ({ repoUrl, content }) {
    return (
      <footer>
        <div className="row">
          <div className="col-sm-12">
            <p>{content}</p>
            <p><a href={repoUrl}>{repoUrl}</a></p>
            </div>
        </div>
      </footer>
    )
  }


Footer.propTypes = {
  content: string,
  repoUrl: string,
}

export default Footer
