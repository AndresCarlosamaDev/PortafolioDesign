import React from "react";
import foto from '../../assets/img/foto.jpg'
import '../../assets/css/acerca.css'

export const Acerca = () => {
    return (
        <div className="container">
            <div className="contain-acerca">
                <div className="contain-acerca_title">
                    <h1>Acerca de mi</h1>
                </div>
                <div className="contain-acerca_info">
                    <div className="contain-acerca_info_img"><img src={foto} alt="Foto_perfil" /></div>
                    <p className="contain-acerca_info_prr">Hola, mi nombre es Andrés Carlosama, soy diseñador gráfico con 4 años de experiencia en diseño de piezas para redes sociales, animación, edición de video, diseño de interfaces web, ilustración entre otras actividades relacionadas con el diseño gráfico y diseño web.</p>
                </div>
            </div>
        </div>
    )
}