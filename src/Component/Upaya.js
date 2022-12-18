import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarUpaya.jpeg";

const Upaya =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Bentuk</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <h2>Berbentuk kubus memiliki empat sisi</h2>
                <h2>Memiliki hiasan pada atas berbentuk segitiga siku-siku kembar atau segitiga sama sisi kembar yang membentuk huruf "M" pada atas lentera</h2>
                <h2>Memiliki penyangga pada bawah lentera</h2>
            </div>
        </div>
    )
}

export default Upaya