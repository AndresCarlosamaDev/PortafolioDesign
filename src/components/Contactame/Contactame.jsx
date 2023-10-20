import TextField from '@mui/material/TextField';
import contactame from '../../assets/img/contactame_2.png';

import './contactame.css';

export const Contactame = () => {
  return (
    <section className='container'>
      <div className='contain-contact'>
        <div className='contain-contact-title'>
          <h1>Contáctame</h1>
        </div>

        <div className='contain-contact-form'>
          <img className='contain-contact-form-img' src={contactame} alt='' />
          <form className='contain-contact-form-form' action=''>
            <TextField
              id='name'
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                border: { borderBottom: 'white' },
              }}
              label='Nombre'
              variant='standard'
            />
            <TextField
              id='email'
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                border: { borderBottom: 'white' },
              }}
              label='Email'
              variant='standard'
            />
            <TextField
              id='phone'
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                border: { borderBottom: 'white' },
              }}
              label='Teléfono'
              variant='standard'
            />
            <TextField
              id='message'
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                border: { borderBottom: 'white' },
              }}
              label='Mensaje'
              variant='standard'
            />
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};
