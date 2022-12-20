import React, {useState} from "react";
import "../ComponentStyle/Menu.css";
import { Link } from "react-router-dom";
import Musik from "../Asset/musik.png";
import Rumah from "../Asset/Home.png";
import arrowR from "../Asset/arrowRight.png";
import arrowL from "../Asset/arrowLeft.png";
import Ui from "./UI";
import HomeModal from "./homeModal";
import iconMateri from "../Asset/iconMateri.png";
import iconQuiz from "../Asset/iconQuiz.png";
import iconVideo from "../Asset/iconVideo.png";

const Tujuan =({mute})=> {
    const [openHome, setOpenHome] = useState(false)
    return(
        <div className="MenuContainer">
            <div className="arrowLeft">
                 <img src={Rumah} onClick={()=> setOpenHome(true)} />
                <Link to="/">
                    <img src={arrowL} />
                </Link>
                
            </div>
            <div className="ContainerList" >
                <h1>Tujuan pembelajaran</h1>
               <p className="tujuan">Tujuan pembelajaran Damar Kurung yaitu untuk terus menghidupkan budaya damar kurung, untuk mengkaji nilai-nilai luhur masyarakat Gresik</p>
               <p className="tujuan">sebagai ajang promosi wisata kota Gresik serta mengangkat taraf ekonomi masyarakat sekitar</p>
               <p className="tujuan"> Penggunaan media pembelajaran Damar Kurung membantu mengkomunikasikan materi dengan cara yang berbeda</p>
               <p className="tujuan">Dapat diterapkan pada jenjang sekolah dasar yang tematik, ataupun SMP dan SMA dengan cara menceritakan isi materi melalui Lukisan Damar Kurung sesuai pakem.</p>
               <p className="tujuan">Pakem yang sudah ada mempermudah guru untuk membuat tema yang diterapkan pada Lukisan Damar Kurung dan alur penyampaiannya.</p>
            </div>
            <div className="arrowLeft">
            <img src={Musik} onClick={mute} />
                <Link to="/Menu">
                    <img src={arrowR} />
                </Link>
            <HomeModal open={openHome} onClose={()=> setOpenHome(false)} />
            </div>
        </div>

    )
}

export default Tujuan