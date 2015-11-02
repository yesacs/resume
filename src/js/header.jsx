'use strict'
import React from 'react'
import _ from 'lodash'

export class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    getContacts(){
        return _(this.props.contact).map(function (c){
            return <a href={c.url} className={c.class} title={c.class}></a>
        }).value()
    }
    render() {
        return (
            <header className="row main-header">
                <div className="row">
                    <div className="gutter col-sm-6">
                        <h1>{this.props.name}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="gutter col-sm-3">
                        <p>{this.props.position}<br />{this.props.location}</p>
                    </div>
                    <div className="content social col-sm-9">
                        <a href={'mailto:' + this.props.email} className="gmail" title={this.props.email}></a>
                        {this.getContacts()}
                    </div>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    name: React.PropTypes.string,
    position: React.PropTypes.string,
    location: React.PropTypes.string
}

export default Header
