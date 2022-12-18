import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import { Link } from "react-router-dom";
import HomeModal from "./homeModal";
import Mute from "../Asset/mute.png";

const Ui =({mutes})=> {
    const [openHome, setOpenHome] = useState(false)
    return(
      
        <div className="UIContainer">
            <div className="UI" >
                <img onClick={mutes} src={Musik}  />
                <img onClick={()=> setOpenHome(true)} src={Rumah}  />
                <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>
    )
}

export default Ui