import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";
import Rumah from "../Asset/Home.png";
import Musik from "../Asset/musik.png";
import HomeModal from "./homeModal";

const Video =({mute})=> {
    const [openHome, setOpenHome] = useState(false)
 

    return(
        <div className="MenuContainer">
            <div className="arrowLeft">
                 <img src={Rumah} onClick={()=> setOpenHome(true)} />
                <Link to="/Materi">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerMateri" >
                <h1>Video</h1>
                <iframe allowFullScreen width="400" height="320" src="https://www.youtube.com/embed/hY5uoPCArx8" tittle='Video'>

                </iframe>
            </div>
            <div className="arrowLeft">
                 <img src={Musik} onClick={mute} />
                <Link to="/Animasi">
                    <img src={arrowR} />
                </Link>
                <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Video;