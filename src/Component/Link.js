import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";
import Rumah from "../Asset/Home.png";
import Musik from "../Asset/musik.png";
import HomeModal from "./homeModal";

const Links =({mute})=> {

 
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
            <h1>Artikel</h1>
                <p>Agar lebih jelas dalam memahami dan mengeneal Damar Kurung, yuk kita lihat baca artikel dari wikipedia berikuts</p>
                <a href="https://quizizz.com/join/quiz/63934de46c6521001dd2339e/start?studentShare=true" target="_blank">

                <button>Buka Artikel</button>
                </a>
            </div>
            <div className="arrowLeft">
                 <img src={Musik} onClick={mute} />
                <Link to="/Quiz">
                    <img src={arrowR} />
                </Link>
                <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Links;