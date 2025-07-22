import { useState } from 'react';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

import './header.css';

export const TemporaryDrawer = () => {
  const [open, setOpen] = useState(false);

  //Switch open/close
  const openMenu = () => {
    return setOpen(!open)
  }

  const toggleDrawer = isOpen => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className='header-contain'>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer open={open} variant="temporary" anchor="left" onClose={toggleDrawer(false)}>
        <List
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <ListItem button onClick={() => scrollToSection('habilidades')}>
            <DesignServicesIcon /><ListItemText primary="Habilidades" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('trabajos')}>
            <BusinessCenterIcon /><ListItemText primary="Trabajos descatados" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('acerca')}>
            <FaceIcon /><ListItemText primary="Acerca de mi" />
          </ListItem>
        </List>
      </Drawer>

    </div>
  );
};