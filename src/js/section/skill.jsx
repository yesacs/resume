'use strict';
import React from 'react';
import Section from './section.jsx';
import _ from 'lodash';

export class Skill extends React.Component  {
    constructor(props) {
         super(props);
    }
    getSubSkills(){
        return _(this.props.subSkills).map(function (ss){
            return <li className="col-sm-4 col-xs-6">{ss}</li>;
        }).value();
    }
    getContent() {
        return (
            <ul>
                {this.getSubSkills()}
            </ul>
        );
    }
    getGutter(){
        return <div>{this.props.title}</div>;
    }
    render(){
        return (
            <Section gutter={this.getGutter()} content={this.getContent()} className="skill" />
        );
    }
}

Skill.propTypes = {
    title: React.PropTypes.string,
    subSkills: React.PropTypes.array
};

export default Skill;
