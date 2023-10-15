import React from "react";
import "../../assets/css/proyecto.css";

export const Proyecto = ({ services }) => {


  return (
    <div className="contain-proyecto">
      {services.map((service) => (
        <div className="contain-proyecto-cont">
          <div className="high-container" key={service.id}>
            <h3 className="high-container-title">{service.nombre}</h3>
            <h4 className="high-container-capsula">{service.categoria}</h4>
          </div>
          <div className="contain-proyecto_low">
            <img src={service.imagen} alt="confioPilar" />
          </div>
          </div>
      ))}
    </div>
  );
};
