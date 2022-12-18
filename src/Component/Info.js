import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/Profil.jpeg";
import Gambar2 from "../Asset/foto2.jpg";

const Info =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Profil Pengembang</h1>
                <img src={Gambar1} alt="FotoProfil"/>
                <p>Nama : Zahir Cahaya Al-Farobi</p>
                <p>NIM : 21105244041</p>
                <p>Prodi : Teknologi Pendidikan 2021 B</p>
                <h1>Profil Pembimbing</h1>
                <img src={Gambar2} alt="FotoProfil"/>
                <p>Nama : Teguh Arie Sandy, M.Pd.</p>
                <p>NIP : 12107210524784</p>
                <p>Dosen Teknologi Pendidikan UNY</p>
                <p>Email : teguhariesandy@uny.ac.id</p>
                <h1>Credit</h1>
                <h2>Materi</h2>
                <p>https://id.wikipedia.org/wiki/Damar_Kurung </p>
                <h2>Video</h2>
                <p>https://youtu.be/FI3fKuB4WLc</p>
                <p>https://youtu.be/q6HeTobHWCU  </p>
                <h2>Audio</h2>
                <p>https://youtu.be/JfCtF6gCr1A </p>
                <h2>Gambar</h2>
                <p>https://damarkurunggallery.blogspot.com/2012/04/proses-pembuatan-damar-kurung.html </p>
            </div>
        </div>
    )
}

export default Info