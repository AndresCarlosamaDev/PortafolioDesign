import React from "react";
import '../../assets/css/redes.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export const Redes = () => {
    return(
        <footer className="footer_contain">
            <div className="footer_contain-txt">
                <h3>Copyright © 2023 All rights reserved</h3>
            </div>
            <div className="footer_contain-logos">
                <a href="https://github.com/AndresCarlosamaDev"><GitHubIcon sx={{ color: "white", fontSize: 35 }} target="blank" /></a>
                <a href="https://www.linkedin.com/in/andrescarlosama/"><LinkedInIcon sx={{ color: "white", fontSize: 35 }} target="blank" /></a>
                <a href="#"><LanguageIcon sx={{ color: "white", fontSize: 35 }} target="blank" /></a>
                <a href="https://www.behance.net/Andres_7k"><BusinessCenterIcon sx={{ color: "white", fontSize: 35 }} target="blank" /></a>
                <a href="https://www.instagram.com/andreus_eatos/"><InstagramIcon sx={{ color: "white", fontSize: 35 }} target="blank" /></a>
            </div>
            <div className="footer_contain-txt">
                <h3>Desarrollado por <b>Andres Carlosama</b></h3>
            </div>
        </footer>
    )
}