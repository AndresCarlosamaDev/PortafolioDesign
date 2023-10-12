import React from "react";
import '../../assets/css/menuProy.css';
import { Proyecto } from "../Proyecto/Proyecto";

export const MenuProy = () => {
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
                    <Proyecto />
                    <Proyecto />
                    <Proyecto />

                </div>
        </div>
    </div>
  );
};
