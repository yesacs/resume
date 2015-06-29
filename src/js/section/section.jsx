'use strict';
import React from 'react';

export class Section extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className={'row ' + this.props.className}>
                <div className="gutter col-sm-3">{this.props.gutter}</div>
                <div className="content col-sm-9">
                    {this.props.content}
                </div>
            </section>
        );
    }
}

Section.propTypes = {
    title: React.PropTypes.string,
    gutter: React.PropTypes.node,
    content: React.PropTypes.node
};

export default Section;
