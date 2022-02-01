import "./skills.scss";
import SkillsList from '../SkillsList/SkillsList';
import {resumeLanguages, frameWorks, otherTech} from "../../data";
import { useEffect, useState } from 'react';



export default function Skills() {

  const [selected, setSelected] =useState("languages");
    const [data, setData] =useState([]);

    const list = [
        {
            id: "languages",
            title: "Languages",
          },
          {
            id: "frameworks",
            title: "Frameworks",
          },
          
          {
            id: "others",
            title: "Others",
          },
          
        ];

        useEffect(() => {

          switch(selected) {
              case "languages":
                  setData(resumeLanguages);
                  break;
              case "frameworks":
                  setData(frameWorks);
                  break;
              case "others":
                  setData(otherTech);
                  break;
                
              default:
                  setData(resumeLanguages);
          }

      }, [selected])

  return ( 
  <div className="skills" id="skills">
    <h1>Skills</h1>
            
        <ul>
            {list.map(item=> (
                  <SkillsList 
                      title={item.title} 
                      active={selected === item.id}
                      setSelected={setSelected}
                      id={item.id}
                    />
                ))} 
        </ul>

        <div className="container">
                {data.map((d) => (
                    <div className="item">
                    <img 
                        src={d.img} 
                        alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}  
            </div>
  </div>
  )
}
