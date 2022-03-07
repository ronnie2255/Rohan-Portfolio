import { useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {completedPortfolio,
        upcomingPortfolio} from "../../data.js";
import { useEffect } from "react";
import { ExternalLink } from "react-external-link";

export default function Portfolio() {

    const [selected, setSelected] =useState("completed");
    const [data, setData] =useState([]);

    const list = [
        {
            id: "completed",
            title: "Completed",
          },
          {
            id: "upcoming",
            title: "Upcoming",
          },
          
        ];

        useEffect(() => {

            switch(selected) {
                case "completed":
                    setData(completedPortfolio);
                    break;
                case "upcoming":
                    setData(upcomingPortfolio);
                    break;
                default:
                    setData(completedPortfolio);
            }

        }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=> (
                    <PortfolioList 
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
                        <h3>{d.title}</h3>
                        <ExternalLink className="projectLink" href={d.adr}>     
                            <img 
                            src={d.img} 
                            alt="" />  
                        </ExternalLink>
                          
                       
                </div>
                ))}
                
               
            </div>
        </div>
    )
}
