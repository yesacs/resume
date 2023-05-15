import React from 'react'
import PropTypes from 'prop-types'

import '/src/scss/header.scss'

const { string } = PropTypes,
  Header = function(props) {
    const { name, position, location } = props

    return (
      <header className="main-header">
        <div>
          <h1>
            {name}
            <small>
              {position}
              <br />
              {location}
              <br />
            </small>
          </h1>
        </div>

        <div className="contact">
          casey dot sullivan at gmail dot com
          <br />
          github/yesacs
        </div>
      </header>
    )
  }

Header.propTypes = {
  name: string,
  position: string,
  location: string,
  email: string,
}

export default Header
