import React from "react";
import "../../assets/css/proyectos.css";
import { Trabajo } from "../Trabajo/Trabajo";

export const ContProyectos = () => {
  return (
    <div className="container">
        <div className="containProyectos">
                <div className="containProyectos-title">
                    <h1>Mis Proyectos</h1>
                </div>
                <div className="containProyectos-categorias">
                    <ol>
                        <button><ul>Todos</ul></button>
                        <button><ul>Branding</ul></button>
                        <button><ul>Ilustración</ul></button>
                        <button><ul>Edición</ul></button>
                        <button><ul>Social Media</ul></button>
                        <button><ul>Diseño Web</ul></button>
                        <button><ul>Animación</ul></button>
                    </ol>
                </div>
                <div className="containProyectos-trabajos">
                    <Trabajo />
                    <Trabajo />
                    <Trabajo />
                </div>
        </div>
    </div>
  );
};
