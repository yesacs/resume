import React from "react";
import PropTypes from "prop-types";

const { string } = PropTypes,
  SectionHeader = function ({ title }) {
    return (
      <header className="row section-header">
        <div className="content">
          <h2>{title}</h2>
        </div>
      </header>
    );
  };

SectionHeader.propTypes = {
  title: string,
};

export default SectionHeader;
