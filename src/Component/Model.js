import React from "react";
import "../ComponentStyle/Materi.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarModel.png";

const Model =({open, onClose})=> {
    if (!open) return null

    return(
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={X} />
            </div>
            <div className="KontenContainer">
                <h1>Model Gambar Pada Damar kurung</h1>
                <img src={Gambar1} alt="EfekRumahKaca"/>
                <p>Terdapat beberapan bentuk model style pada damar kurung dalam beberapa masa, seperti :</p>
                <h2>Style Majapahitan disebut Damar Keraton, gambar yang digunakan adalah seperti Wayang Beber oleh Bre Wengker</h2>
                <h2>Style Prapenan disebut Damar Kedaton, gambar yang digunakan hasil karya sunan Prapen yang dapat terlihat pada babad Sunan Prapen</h2>
                <h2>Style Puspanegaran disebut Damar Kurung, gambar yang digunakan adalah seperti Wayang Kulit yang tekombinasi dengan style Prapenan. karya yang masih ada adalah karya Kyai Oentoeng yang merupakan paman Masmoendari</h2>
                <h2>Style Masmoendari, gambar yang digunakan adalah hasil karya Masmoendari yang kemudian menjadi ciri khas kota Gresik, dengan berbagai karakter terbaru yang belum pernah ada, seperti njonja moeloek. karyanya sebagian besar di koleksi oleh kolektor, kini style Masmoendari dilestarikan oleh adik Masmoendari dan cucunya Samadji</h2>
                <h2>Style Pak Inoeng, gambar yang digunakan seperti Masmoendari tetapi lebih simpel tetapi diramaikan dengan isian berupa garis zigzag, karya pak Inoeng banyak terpajang pada berbagai kantor instasi pemerintahan</h2>
                <h2>Style Cak Opang, gambar yang digunakan lebih ke karakter masa kini dan pewarnaan yang lebih banyak serta teknik gradiasi, Karya cak Opang menjadi jajaran oleh-oleh khas Gresik yang masih ada dan sebagian telah ada di Luar Negeri</h2>
                <h2>Style Cak Iwan, gambar yang digunakan seperti Pak Inoeng, hanya saja lebih terlihat berisi atau semok pada karakternya dengan sentuhan gaya kontemporer, Karya cak joko iwan menjadi jajaran oleh-oleh khas Gresik dan sebagai penghias di berbagai kafe dan rumah Makan di Gresik</h2>
                <h2>Style Tjak Anas, gambar yang digunakan lebih ke karakter masa kini hanya saja pada bagian wajah tidak digambar atau dibiarkan polos, Karya tjak anas justru sulit ditemui di kota Gresik sendiri melainkan banyak tersebar di luar Kota Gresik.</h2>
            </div>
        </div>
    )
}

export default Model