import React from "react";
import '../../assets/css/servicios.css'
import branding from '../../assets/img/icon/icon_1.png'
import Ilustracion from '../../assets/img/icon/icon_2.png';
import Video from '../../assets/img/icon/icon_3.png';
import Social from '../../assets/img/icon/icon_4.png';
import FrontEnd from '../../assets/img/icon/icon_5.png';
import Animacion from '../../assets/img/icon/icon_6.png';

export const Servicios = () => {
    return(
        <section className="servicios-contain">
            <div  className="servicios-contain_title">
                <h1>Mis servicios</h1>
            </div>
            <div className="servicios-contain_items">
                <div className="servicios-contain_s1">
                    <img src={branding} alt="branding" />
                    <h4>Branding</h4>
                </div>
                <div className="servicios-contain_s1">
                    <img src={Ilustracion} alt="Ilustracion" />
                    <h4>Ilustración</h4>
                </div>
                <div className="servicios-contain_s1">
                    <img src={Video} alt="Video" />
                    <h4>Edición de Video</h4>
                </div>
                <div className="servicios-contain_s1">
                    <img src={Social} alt="Social" />
                    <h4>Social Media</h4>
                </div>
                <div className="servicios-contain_s1">
                    <img src={FrontEnd} alt="FrontEnd" />
                    <h4>Diseño Web Front End</h4>
                </div>
                <div className="servicios-contain_s1">
                    <img src={Animacion} alt="Animacion" />
                    <h4>Animación</h4>
                </div>
            </div>
        </section>
    )
}