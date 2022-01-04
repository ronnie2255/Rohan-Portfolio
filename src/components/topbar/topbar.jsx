import "./topbar.scss"
import Person from '@mui/icons-material/Person';
import Mail from '@mui/icons-material/Mail';

//import {Air, Mail} from "@material-ui/icons/";

export default function topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Vagabond.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span> +249-288-1095</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>ronnie2255@icloud.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
