import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";
import Rumah from "../Asset/Home.png";
import Musik from "../Asset/musik.png";
import HomeModal from "./homeModal";
const Quiz =({mute})=> {

 
    const [openHome, setOpenHome] = useState(false)
    return(
        <div className="MenuContainer">
            <div className="arrowLeft">
                 <img src={Rumah} onClick={()=> setOpenHome(true)}/>
                <Link to="/Link">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerMateri2">
                <div className="TittleVideo">
                    <h1>Quizz</h1>
                </div>
                <div className="ContainerMateri" >
                <p>klik tombol "Mulai" untuk mengerjakan quiz</p>
                <a href="https://quizizz.com/join/quiz/63934de46c6521001dd2339e/start?studentShare=true" target="_blank">

                <button>Mulai</button>
                </a>
            </div>
            </div>
            <div className="arrowLeft">
                 <img src={Musik} onClick={mute} />
                <Link to="">
                    <img src={arrowR} />
                </Link>
                <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Quiz;

