import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";


const About =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="PetunjukContainer">
                <h1>Petunjuk</h1>
                <div className="icon">
                    <img src={arrowL} />
                    <p>Tombol Navigas Kembali</p>
                </div>
                <div className="icon">
                    <img src={arrowR} />
                    <p>Tombol Navigas Selanjutnya</p>
                </div>
                <div className="icon">
                    <img src={Rumah} />
                    <p>Tombol Navigasi Kembali ke Home</p>
                </div>
                <div className="icon">
                    <img src={Musik} />
                    <p>Tombol Mute / Unmute Backsound</p>
                </div>
            </div>
        </div>
    )
}

export default About