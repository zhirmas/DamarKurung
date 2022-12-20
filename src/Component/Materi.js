import React, { useState } from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Pengertian from "./Pengertian";
import Penyebab from "./Penyebab";
import Dampak from "./Dampak";
import Upaya from "./Upaya";
import Rumah from "../Asset/Home.png";
import Musik from "../Asset/musik.png";
import Perkembangan from "./Perkembangan";
import Ui from "./UI";
import HomeModal from "./homeModal";
import Home from "./Home";
import Model from "./Model";
import iconPengertian from "../Asset/iconPengertian.png";
import iconEtimologi from "../Asset/IconEtimologi.png";
import iconEvent from "../Asset/iconEvent.png";
import iconModel from "../Asset/iconModel.png";
import iconSejarah from "../Asset/iconSejarah.png";
import iconBentuk from "../Asset/iconBentuk.png";

const Materi =({mute})=> {

    const [openPengertian, setOpenPengertian] = useState (false)
    const [OpenPenyebab, setOpenPenyebab] = useState (false)
    const [OpenDampak, setOpenDampak] = useState (false)
    const [OpenUpaya, setOpenUpaya] = useState (false)
    const [OpenModel, setOpenModel] = useState (false)
    const [openFestival, setOpenFestival] = useState (false)

    const [openHome, setOpenHome] = useState(false)

    return(
        <div className="MenuContainer">
            <div className="arrowLeft">
                 <img src={Rumah} onClick={()=> setOpenHome(true)} />
                <Link to="/Menu">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerMateri2">
            <div className="TittleVideo">
                 <h1>Materi Damar Kurung</h1>
            </div>
            <div className="ContainerMateri" >
                    <button onClick={()=> setOpenPengertian(true)}>Pengertian<img src={iconPengertian} /></button>
                    <button onClick={()=> setOpenPenyebab(true)}>Etimologi<img src={iconEtimologi} /></button>
                    <button onClick={()=> setOpenDampak(true)}>Sejarah<img src={iconSejarah} /></button>
                    <button onClick={()=> setOpenUpaya(true)}>Bentuk<img src={iconBentuk} /></button>
                    <button onClick={()=> setOpenModel(true)}>Model Gambar<img src={iconModel} /></button>
                    <button onClick={()=> setOpenFestival(true)}>Perkembangan dan Festival Damar Kurung<img  src={iconEvent}/></button>
           
            </div>
            </div>
            <div className="arrowLeft">
                 <img src={Musik} onClick={mute} />
                <Link to="/Video">
                    <img src={arrowR} />
                </Link>
                
            </div>
            <Pengertian open={openPengertian} onClose={()=>setOpenPengertian(false)} />
            <Penyebab open={OpenPenyebab} onClose={()=>setOpenPenyebab(false)} />
            <Dampak open={OpenDampak} onClose={()=>setOpenDampak(false)} />
            <Upaya open={OpenUpaya} onClose={()=>setOpenUpaya(false)} />
            <Model open={OpenModel} onClose={()=>setOpenModel(false)} />
            <Perkembangan open={openFestival} onClose={()=>setOpenFestival(false)} />

            <HomeModal open={openHome} onClose={()=> setOpenHome (false)} />
 
        </div>

    )
}

export default Materi;