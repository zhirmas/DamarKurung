import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPeng.png";

const Pengertian =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Pengertian Damar Kurung</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Damar Kurung adalah sebuah lentera dengan bentuk khas yang berasal dari Kabupaten Gresik, Jawa Timur Indonesia yang berbeda dengan Lampion China. Tokoh seniman sekaligus Maestro Damar Kurung yang populer adalah Masmundari</p>

            </div>
        </div>
    )
}

export default Pengertian