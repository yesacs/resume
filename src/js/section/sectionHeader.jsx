'use strict';
import React from 'react';

export class SectionHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="row section-header">
                <div className="content col-sm-9 col-sm-offset-3">
                    <h2>{this.props.title}</h2>
                </div>
            </header>
        );
    }
}

SectionHeader.propTypes = {
    title: React.PropTypes.string
};

export default SectionHeader;
