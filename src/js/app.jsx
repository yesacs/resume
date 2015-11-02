import React from 'react' //eslint-disable-line
import ReactDOM from 'react-dom'
import Resume from './resume.jsx'
import ResumeData from '../resumeData.json'

ReactDOM.render(<Resume {...ResumeData}/>, document.querySelector('#resume'), function (){})
