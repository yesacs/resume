import React from "react";
import PropTypes from "prop-types";

const { string } = PropTypes,
  Header = function (props) {
    const { name, position, location, email } = props;

    return (
      <header className="main-header">
        <div className="row">
          <div className="gutter">
            <h1>{name}</h1>
          </div>
        </div>

        <div className="row">
          <div className="gutter">
            <p>
              {position}
              <br />
              {location}
            </p>
          </div>
        </div>

        <div className="tabs is-boxed nav-tabs">
          <ul>
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
        </div>
      </header>
    );
  };

Header.propTypes = {
  name: string,
  position: string,
  location: string,
  email: string,
};

export default Header;
