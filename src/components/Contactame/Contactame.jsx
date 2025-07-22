import TextField from '@mui/material/TextField';
import contactame from '../../assets/img/contactame_2.png';
import LogoWp from '../../assets/img/icon/Logo_whatapp.png';

import './contactame.css';

export const Contactame = () => {
  return (
    <section className='container'>
      <button className='contain-contact'>
        <a
          href="https://wa.me/573165646836?text=Hola%20me%20interesa%20tu%20trabajo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Escríbeme por WhatsApp
        </a>
        <img src={LogoWp} alt="Escríbeme por WhatsApp" />
      </button>
    </section>
  );
};
