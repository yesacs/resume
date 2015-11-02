'use strict'
import React          from 'react'
import Header         from './header.jsx'
import Footer         from './footer.jsx'
import Section        from './section/section.jsx'
import SectionHeader  from './section/sectionHeader.jsx'
import Job            from './section/job.jsx'
import Skill          from './section/skill.jsx'
import _              from 'lodash'

export class Resume extends React.Component {
    constructor(props) {
        super(props)
    }
    getJobs(){
        return _(this.props.jobs).map(function (j){
            return <Job {...j}/>
        }).value()
    }
    getSkills(){
        return _(this.props.skills).map(function (s){
            return <Skill {...s}/>
        }).value()
    }
    getOffline(){
        return <p className="offline p-block">{this.props.offline}</p>
    }
    render() {
        return (
            <span>
                <Header {...this.props} />

                {this.getJobs()}

                <SectionHeader title="Skills" />
                {this.getSkills()}

                <SectionHeader title="Offline" />
                <Section content={this.getOffline()} />

                <Footer content={this.props.footer} repoUrl={this.props.repoUrl} />
            </span>
        )
    }
}

export default Resume
