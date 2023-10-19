import React, { useState } from 'react';
import '../../assets/css/header.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom'

export const TemporaryDrawer = () => {
    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (isOpen) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setOpen(isOpen);
    };
  
    return (
      <div className='header-contain'>
        <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            {/* Lista de elementos a presentarse */}
            <List>
                {['Acerca de mi', 'Mi Portafolio', 'Contáctame'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton component={Link} to={index === 0 ? "/#acerca" : (index === 1 ? "#portafolio" : "#contacto")}>
                            <ListItemIcon>
                                {index === 0 && <FaceIcon/>}
                                {index === 1 && <BusinessCenterIcon/>}
                                {index === 2 && <EmailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
          </Box>
        </Drawer>
      </div>
    );
  }
  