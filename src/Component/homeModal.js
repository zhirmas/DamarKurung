import React from "react";
import "../ComponentStyle/Modal.css";
import X from "../Asset/X.png";
import Gambar1 from "../Asset/GambarUpaya.PNG";
import { Link } from "react-router-dom";

const HomeModal =({open, onClose})=> {

    if(!open) return null

    return(
        <div className="OverlayModal">
            <div className="ModalContainer">
                
                <h1>Kembali ke Home ?</h1>
                <Link to="/">
                <button>Ya</button>
                </Link>

                <button onClick={onClose}>Batal</button>
            </div>
        </div>
    )
}

export default HomeModal