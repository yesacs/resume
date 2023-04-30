import React from 'react'
import PropTypes from 'prop-types'

const { string } = PropTypes,
  Header = function (props) {
    const { name, position, location, email } = props

    return (
      <header className="main-header">
        <div className="row">
          <h1>
            {name}
            <small>
              {position}
              <br />
              {location}
            </small>
          </h1>
        </div>
        <ul className="main-nav">
          <li className="is-active">
            <a>
              <span className="icon is-small">
                <i className="fas fa-image" aria-hidden="true"></i>
              </span>
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fas fa-music" aria-hidden="true"></i>
              </span>
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="fas fa-film" aria-hidden="true"></i>
              </span>
              <span>About</span>
            </a>
          </li>
          <li>
            <a>
              <span className="icon is-small">
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
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
