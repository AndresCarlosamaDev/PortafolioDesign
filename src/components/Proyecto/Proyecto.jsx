import React from "react";
import confioPilar from "../../assets/img/confioPilar.png";
import "../../assets/css/proyecto.css";

export const Proyecto = () => {
  return (
    <div className="contain-proyecto">
      <div className="high-container">
        <h3 className="high-container-title">IoTectronic</h3>
        <h4 className="high-container-capsula">Categoria</h4>
      </div>
      <div className="contain-proyecto_low">
        <img src={confioPilar} alt="confioPilar" />
      </div>
    </div>
  );
};
