'use strict'
import React from 'react'

export class Footer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="col-sm-12">
                        <p>{this.props.content}</p>

                        <p><a href={this.props.repoUrl}>{this.props.repoUrl}</a></p>
                    </div>
                </div>
            </footer>
        )
    }
}

Footer.propTypes = {
    content: React.PropTypes.string
}

export default Footer
