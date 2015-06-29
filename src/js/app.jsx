import React from 'react';
import Resume from './resume.jsx';
import ResumeData from '../resumeData.json';

React.render(<Resume {...ResumeData}/>, document.querySelector('#resume'), function (){});
