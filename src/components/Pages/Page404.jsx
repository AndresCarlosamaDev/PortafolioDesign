import React from "react";
import '../../assets/css/page404.css'
import img404 from '../../assets/img/Page404.png'

export const Page404 = () => {
    return (
        <div className="page404-contain">
            <div className="page404-contain-btn">
                <a href="/"><button>Volver a inicio</button></a>
            </div>
            <div className="page404-contain_img">
                <img src={img404} alt="imagen_404" />
            </div>
        </div>
    )
}