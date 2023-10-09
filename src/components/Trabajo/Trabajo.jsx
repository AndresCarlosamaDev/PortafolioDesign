import React from 'react';
import '../../assets/css/capsula.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import trabajoUno from '../../assets/img/p1.1.jpg'

export const Trabajo = () => {
  return (
    <Card sx={{
        maxWidth: '31%',
        boxShadow: 7,
        }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={trabajoUno}
          alt="Page Andrus Pizza"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Web Page Andrus Pizza
          </Typography>
          <div className='capsula'>
            <h4>Categoria</h4>
          </div>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}