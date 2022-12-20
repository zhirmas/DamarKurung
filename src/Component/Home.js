import React,{useState} from "react";
import "../ComponentStyle/HomeStyle.css";
import Judul from "../Asset/Judul.png";
import Play from "../Asset/Play.png";
import { Link } from 'react-router-dom';
import info from "../Asset/Info.png";
import about from "../Asset/about.png";
import Info from "./Info";
import "../ComponentStyle/Materi.css";
import About from "./about";
import damar1 from "../Asset/damar1.png";
import damar2 from "../Asset/damar2.png";

const Home =()=> {

    const [openInfo, setOpenInfo] = useState (false)
    const [openAbout, setOpenAbout] = useState (false)

    return(
     <div className="HomeContainer">
        <img src={damar1} className="damar1" />
        <img src={damar2} className="damar2" />
        <div className="TittleContainer">
            <img src={Judul} />
        </div>
        <div className="ButtonContainer">
            <Link to="/Tujuan">
             <img src={Play} />
            </Link>
            <div className="secondButton">
                <img onClick={()=>setOpenInfo(true)} src={info} />
                <img onClick={()=>setOpenAbout(true)} src={about} />
            </div>
        </div>
        <Info open={openInfo} onClose={()=> setOpenInfo(false)} />
        <About open={openAbout} onClose={()=> setOpenAbout(false)} />
    </div>   
    )
}

export default Home;