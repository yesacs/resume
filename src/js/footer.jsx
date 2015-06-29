'use strict';
import React from 'react';

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-sm-12">
                        {this.props.content}
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    content: React.PropTypes.string
};

export default Footer;
