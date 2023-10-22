import TextField from '@mui/material/TextField';
import contactame from '../../assets/img/contactame_2.png';
import { create } from '../../api/api'
import { v4 as uuid } from "uuid";

import './contactame.css';
import { useState } from 'react';

export const Contactame = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  //Asignacion de valor en el hook
  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
  }
  const changePhone = (e) => {
    setPhone(e.target.value)
  }
  const changeMessage = (e) => {
    setMessage(e.target.value)
  }

  //Manejo de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {id:uuid(),name, email, phone, message}
    const url = "customers"

    // console.log(url, data)
    create(url, data)
    ///Limpiar datos despues de el envio
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
  }

  return (
    <section className='container' id='contactame'>
      <div className='contain-contact'>
        <div className='contain-contact-title'>
          <h1>Contáctame</h1>
        </div>

        <div className='contain-contact-form'>
          <img className='contain-contact-form-img' src={contactame} alt='' />
          <form className='contain-contact-form-form' onSubmit={handleSubmit}>
            <TextField
              id='name'
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                border: { borderBottom: 'white' },
              }}
              label='Nombre'
              variant='standard'
              value={name}
              onChange={changeName}
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
              value={email}
              onChange={changeEmail}
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
              value={phone}
              onChange={changePhone}
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
              value={message}
              onChange={changeMessage}
            />
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};
