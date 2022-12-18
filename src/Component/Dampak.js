import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarDampak.png";

const Dampak =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Sejarah</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Damar kurung sangat berbeda dengan lampion yang selalu diidentikan lampion warga Tiongkok oleh masyarakat dan berbagai seniman, Damar kurung justru lebih memiliki kekerabatan ke lentera Jepang yang biasa disebut Andon.
                Dalam pengamatan Gresik iku Jaseters Damar Kurung di Perkirakan telah ada sejak abad 15 setelah Bre Wengker sebagai duta Majapahit mengunjungi Jepang untuk memberikan hadiah dari raja Wikramawardhana sebagai tanda persahabatan antara Jawa Kerajaan Majapahit dengan Jepang kekaisaran Muromachi. Sehingga ketika kembali Ke majapahit, Bre Wengker membawa beberapa oleh-oleh dari Jepang seperti Andon atau Lentera khas Jepang dan metode pembuatan Kertas yang lebih halus, ringan dan tipis, di mana kala itu Majapahit telah memiliki tempat pembuat kertas tekstur agak kasar dan tebal di Wengker.
                Kini tradisi warga muslim Gresik saat menyambut lailatul Qodar pada bulan ramadhan dalam kalender Hijriyah, yang menggantungkan lentera damar kurung di depan rumah.</p>
        

            </div>
        </div>
    )
}

export default Dampak