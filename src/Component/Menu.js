import React, {useState} from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";
import HomeModal from "./homeModal";
import iconMateri from "../Asset/iconMateri.png";
import iconQuiz from "../Asset/iconQuiz.png";
import iconVideo from "../Asset/iconVideo.png";

const Menu =({mute})=> {
    const [openHome, setOpenHome] = useState(false)
    return(
        <div className="MenuContainer">
            <div className="arrowLeft">
                 <img src={Rumah} onClick={()=> setOpenHome(true)} />
                <Link to="/">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerList" >
                <h1>Menu</h1>
                <Link className="Link" to="/Materi">
                    <button>Materi<img src={iconMateri} /></button>
                </Link>
                <Link className="Link" to="/Video">
                    <button>Video<img src={iconVideo} /></button>
                </Link>
                <Link className="Link" to="/Quiz">
                    <button>Quiz<img src={iconQuiz} /></button>
                </Link>
            </div>
            <div className="arrowLeft">
            <img src={Musik} onClick={mute} />
                <Link to="/Materi">
                    <img src={arrowR} />
                </Link>
            <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Menu