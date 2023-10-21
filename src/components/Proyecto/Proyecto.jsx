import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './proyecto.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const Proyecto = ({ services }) => {
  return (
    <div className='contain-proyecto'>
      {services.map(service => (
        <div key={service.id} className='contain-proyecto-cont'>
          <div className='high-container' key={service.id}>
            <div>
              <h3 className='high-container-title'>{service.nombre}</h3>
              <h4 className='high-container-capsula'>{service.categoria}</h4>
            </div>
            <div className='high-container-icon'>
              <Link to={service.link}>
                <VisibilityIcon target='blank' />
              </Link>
            </div>
          </div>
          <div className='contain-proyecto_low'>
            <img src={service.imagen} alt='confioPilar' />
          </div>
        </div>
      ))}
    </div>
  );
};

Proyecto.propTypes = {
  services: PropTypes.func.isRequired, // Mark 'change' as a required function prop
};
