'use strict'
import React from 'react'
import Section from './section.jsx'
import _ from 'lodash'

export class Job extends React.Component  {
    constructor(props) {
        super(props)
    }
    getDuties() {
        return _(this.props.duties).map((d) => {
            return <li>{d}</li>
        }).value()
    }
    getLinks() {
        return _(this.props.links).map((l) => {
            return <li><a href={l.url}>{l.label}</a></li>
        }).value()
    }
    getContent() {
        return (
            <div>
                <div className="job-content">
                    <h3 className="heading">{this.props.title}</h3>
                    <p className="company">{this.props.company}|{this.props.location}|{this.props.timeAtPosition}</p>
                    <ul className="duties">{this.getDuties()}</ul>
                    <div className="links">
                        <h4>Links of Interest</h4>
                        <ul>{this.getLinks()}</ul>
                    </div>
                </div>
            </div>
        )
    }
    getGutter(){
        return <div className={'logo ' + (this.props.gutterClassName || null)}></div>
    }
    render(){
        return (
            <Section className={'job ' + this.props.class} gutter={this.getGutter()} content={this.getContent()} />
        )
    }
}

Job.propTypes = {
    title:          React.PropTypes.string,
    company:        React.PropTypes.string,
    location:       React.PropTypes.string,
    timeAtPosition: React.PropTypes.string,
    duties:         React.PropTypes.arrayOf(React.PropTypes.node),
    links:          React.PropTypes.arrayOf(React.PropTypes.shape({
        url:        React.PropTypes.string,
        label:      React.PropTypes.string
    }))
}


export default Job
