import { Link } from 'react-router-dom';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BehanceIcon from '../../assets/img/icon/icon_behance-01.png'

import './redes.css';

export const Redes = () => {
  return (
    <footer className='footer_contain'>
      <div className='footer_contain-logos'>
        <Link href='https://www.linkedin.com/in/andrescarlosama/'>
          <LinkedInIcon sx={{ color: 'white', fontSize: 35 }} target='blank' />
        </Link>
        <Link href='https://www.behance.net/Andres_7k'>
          <BusinessCenterIcon
            sx={{ color: 'white', fontSize: 35 }}
            target='blank'
          />
        </Link>
      </div>
      <div className='footer_contain-txt'>
        <h3>
          © 2025 <b>Andrés Carlosama</b> All rights reserved
        </h3>
      </div>
    </footer>
  );
};
