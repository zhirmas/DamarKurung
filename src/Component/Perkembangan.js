import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarFestival.jpg";
import Gambar2 from "../Asset/GambarPerkembanga.jpeg";

const Perkembangan =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Perkembangan Damar Kurung</h1>
                <img src={Gambar2} alt="EfekRumahKaca"/>
                <p>Dewasa ini Damar kurung mengalami banyak perkembangan, seperti damar kurung yang terbuat dari mika akrilik, lukisan berfigura, lampu tidur, arsitektur bangunan hingga desain pada kaos. Hingga pada penggunaan damar kurung beralih fungsi yang awalnya merupakan tradisi menjadi penerang jalan raya nasional dan taman kota yang di buat oleh pemerintah Gresik</p>
                <h1>Festival Damar Kurung</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Untuk mengambalikan fungsi damar kurung yang sesungguhnya, Novan Effendy menciptakan Festival Damar Kurung yang dimulai pada tahun 2012 dilaksanakan setiap bulan Hijriah kalender Islam yang bertujuan untuk mengingatkan masyarakat dan mengembalikan tradisi warga Gresik.
                Dalam Festival yang selalu diadakan setiap tahun, dinyalakannya ribuan damar kurung khas Gresik dalam beberapa hari serta memberikan edukasi kepada generasi muda yang biasa di sebut Pesantren Damar Kurung.
                </p>

            </div>
        </div>
    )
}

export default Perkembangan