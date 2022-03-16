import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import About from "./components/about/about"
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/skills";

//import Works from "./components/works/works";
//import Testimonials from "./components/testimonials/testimonials";
//import Contact from "./components/contact/contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Portfolio/>
        <Skills/>
        {/* <Contact/> */}


      </div>

      
      

    
    </div>
  );
}

export default App;
