import { useEffect, useState } from 'react';

import { read } from '../../api/api';
import { Proyecto } from '../Proyecto/Proyecto';

import './menuProy.css';

export const MenuProy = () => {
  //Datos DB
  const [services, setServices] = useState([]);
  const url = '/servicio';

  useEffect(() => {
    read(url, setServices);
  }, [url]);
  console.log('Servicios de prueba', services);

  return (
    <div className='container'>
      <div className='containProyectos'>
        <div className='containProyectos-title'>
          <h1>Mis Proyectos</h1>
        </div>
        <div className='containProyectos-categorias'>
          <ol>
            <button>
              <ul>Todos</ul>
            </button>
            <button>
              <ul>Branding</ul>
            </button>
            <button>
              <ul>Ilustración</ul>
            </button>
            <button>
              <ul>Edición</ul>
            </button>
            <button>
              <ul>Social Media</ul>
            </button>
            <button>
              <ul>Diseño Web</ul>
            </button>
            <button>
              <ul>Animación</ul>
            </button>
          </ol>
        </div>
        <div className='containProyectos-trabajos'>
          <Proyecto services={services} />
        </div>
      </div>
    </div>
  );
};
