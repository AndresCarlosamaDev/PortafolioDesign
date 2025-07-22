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
    <div className='container' id='trabajos'>
      <div className='containProyectos'>
        <div className='containProyectos-title'>
          <h1>Trabajos destacados</h1>
        </div>
        <div className='containProyectos-trabajos'>
          <Proyecto services={services} />
        </div>
      </div>
    </div>
  );
};
