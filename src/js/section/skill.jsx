'use strict'
import React   from 'react'
import Section from './section.jsx'
import _       from 'lodash'

export class Skill extends React.Component  {
    constructor(props) {
        super(props)
    }
    getContent(){
        var lis = _(this.props.subSkills).map((ss) => {
            return <li className="col-sm-4 col-xs-6">{ss}</li>
        }).value()

        return (<ul>{lis}</ul>)
    }
    getGutter(){
        return <div>{this.props.title}</div>
    }
    render(){
        return (
           <Section gutter={this.getGutter()}
                    content={this.getContent()}
                    className="skill" />
        )
    }
}

Skill.propTypes = {
    title: React.PropTypes.string,
    subSkills: React.PropTypes.array
}

export default Skill
