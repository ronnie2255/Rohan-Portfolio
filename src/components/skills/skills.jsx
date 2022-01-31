import React from 'react';
import "./skills.scss";
import SkillsList from '../SkillsList/SkillsList';



export default function Skills() {
  return ( 
  <div className="skills" id="skills">
    <h1>Skills</h1>
            
        <ul>
            <li>Languages</li>
            <li>Frameworks</li>
            <li>Version Control</li>
            <li>Design</li>
            <li>Data Visualization</li>
            
        </ul>

        <div className="container">
            <h3>Languages: JavaScript, Python</h3>
        </div>
  </div>
  )
}
