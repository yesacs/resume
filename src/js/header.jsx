import React from 'react'
import PropTypes from 'prop-types'

const
  { string } = PropTypes,
  getContacts = props => props.contact.map((c, i) =>
    <a key={i} href={c.url} className={c.class} title={c.class} />
  ),
  Header = function (props) {
    const { name, position, location, email } = props

    return (
      <header className="row main-header">
        <div className="row">
            <div className="gutter col-sm-6">
              <h1>{name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="gutter col-sm-3">
            <p>{position}<br />{location}</p>
          </div>
          <div className="content social col-sm-9">
            <a href={'mailto:' + email} className="gmail" title={email} />
            {getContacts(props)}
          </div>
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
