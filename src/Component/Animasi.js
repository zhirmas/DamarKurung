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
                <Link to="/Video">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerMateri2">
                
            <div className="TittleVideo">
                 <h1>Animasi</h1>
            </div>
            <div className="ContainerMateri" >
                <iframe allowFullScreen width="390" height="340" src="https://www.youtube.com/embed/q6HeTobHWCU" tittle='Animasi'>

                </iframe>
            </div>
            </div>
            <div className="arrowLeft">
                 <img src={Musik} onClick={mute} />
                <Link to="/Link">
                    <img src={arrowR} />
                </Link>
                <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Video;