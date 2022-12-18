import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarPenyebab.png";

const Penyebab =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Etimologi</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
              
                <p>Menurut Penelitian Jaseters, dari segi Bahasa Damar berarti Lampu yang mengeluarkan cahaya dari api kecil. sedangkan Kurung diartikan seperti tempat hewan tinggal yang lebih menuju ke Kandang atau sangkar burung buatan manusia dengan peletakan dengan cara di gantung. Arti keseluruhan Damar Kurung adalah Sebuah Lentera dengan bentuk kurung-an dengan cara di gantung.</p>

            </div>
        </div>
    )
}

export default Penyebab