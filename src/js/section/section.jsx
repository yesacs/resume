import React from "react";
import PropTypes from "prop-types";

const { string, node } = PropTypes,
  Section = function ({ className, gutter, content }) {
    return (
      <section className={"row " + className}>
        <div className="content col-sm-12">{content}</div>
      </section>
    );
  };

Section.propTypes = {
  className: string,
  gutter: node,
  content: node,
};

export default Section;
