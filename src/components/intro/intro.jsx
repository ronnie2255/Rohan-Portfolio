import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
//import useWindowSize from "../../useWindowSize";

export default function Intro() {
    const textRef = useRef(null);
    const greetRef = useRef(null);
    // const { width } = useWindowSize();

    useEffect(()=> {
        init(greetRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Bonjour!, Je suis", "Hi There!, I'm" ],
         });
    
    }, [])

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Front-End Developer" ],
         });
    
    }, [])
    return (
        <div className="intro" id="intro">
        {/* visible only when window greater than 768px
        {width > 768 && (
            <>
                
            </>
        )} */}
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/ronnie.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2><span ref={greetRef}></span></h2>
                        <h1>Rohan</h1>
                        <h3>Aspiring <span ref={textRef}></span></h3>
                    </div>
                    <a href="#about">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
          
        
        </div>
    )
}

